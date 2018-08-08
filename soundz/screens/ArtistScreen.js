import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View, ScrollView, RefreshControl, Image} from 'react-native';
import {Text} from "react-native-elements";

import {isUndefined, isEmpty} from 'lodash'

import {artistAction} from '../actions/ArtistActions'
import {CONST_GENRE_ARTIST} from '../constants/System'
import Playlist from '../components/Playlist/index'
import device from '../constants/Layout'

class ArtistScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // pathname: this.props.location.pathname || '',
      genre: '',
      id: '',
      isLoading: false,
      refreshing: false,
      artistName: this.props.navigation.getParam('artistName', 'Huong-Tram')
    };

  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.props);
    const {navigation} = this.props;
    let artistName = navigation.getParam('artistName', 'Huong-Tram');
    this.onFetchArtists(artistName);
  }

  componentDidCatch() {
    this.setState({isLoading: false});
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps');
  //   if (nextProps.location.pathname !== prevState.pathname) {
  //     return {
  //       pathname: nextProps.location.pathname
  //     };
  //   }
  //
  //   return null;
  // }

  onFetchArtists = artistName => {
    this.setState({isLoading: true});
    this.props.fetchArtistSong({name: artistName}).then(() => {
      this.setState({isLoading: false});
    });
  };

  _onRefresh = () => {
    let {artistName} = this.state;
    this.setState({refreshing: true});
    this.props.fetchArtistSong({name: artistName}).then(() => {
      this.setState({refreshing: false});
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    // if (
    //   prevProps.location.pathname !== this.props.location.pathname ||
    //   this.state.page !== prevState.page
    // ) {
    //   this.onFetchGenreArtists(this.props.match.params);
    // }
  }

  handleClickSong = (songId, songName) => {
    this.props.navigation.navigate('Song', {songId, songName});
  };

  render() {
    const {props} = this;
    const {songs, cover} = props;
    const {genre, isLoading} = this.state;
    console.log(isLoading);

    const viewType =
      isUndefined(genre) || isEmpty(genre)
        ? CONST_GENRE_ARTIST.VIEW_DEFAULT
        : CONST_GENRE_ARTIST.VIEW_DETAIL;

    if (isLoading) {
      return <View>
        <Text h1>Loading</Text>
      </View>
    }

    if (isEmpty(songs)) {
      return <View>
        <Text h1>Error, reload</Text>
      </View>
    }
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <Image
          source={{uri: cover}}
          style={{width: device.window.width, height: 180}}
        />
        <Playlist songs={songs} onClickSong={this.handleClickSong}/>
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  const {cover, avatar, artistName, songs, numberOfPages} =
  state.artistReducer || {};

  return {
    cover,
    avatar,
    songs,
    numberOfPages,
    artistName
  };
}

function mapDispatchToProps(dispatch) {
  const {fetchArtist, fetchArtistSong} = artistAction;
  return bindActionCreators({fetchArtist, fetchArtistSong}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistScreen);
