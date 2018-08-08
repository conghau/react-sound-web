import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View, ScrollView, RefreshControl} from 'react-native';
import {Text} from "react-native-elements";

import {isUndefined, isEmpty} from 'lodash'

import {genreArtistAction} from '../actions/GenreArtistActions'
import {CONST_GENRE_ARTIST} from '../constants/System'
import GenreArtistView from '../components/GenreArtistView/GenreArtistView'

class GenreArtistScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // pathname: this.props.location.pathname || '',
      genre: '',
      id: '',
      isLoading: false
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.onFetchGenreArtists();
    console.log(this.props);
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

  onFetchGenreArtists = params => {
    let {genre, id} = params || {};
    let {page} = this.state;
    this.setState({isLoading: true});
    this.props.fetchGenreArtists({genre, id, page}).then(() => {
      this.setState({genre, id, page, isLoading: false});
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

  handlePageClick = data => {
    let selected = data.selected + 1;
    this.setState({page: selected});
    let {pathname} = this.state;
    this.props.history.push(`${pathname}?${query}`);
    console.log(this);
  };

  onPress = (artistName) => {
    this.props.navigation.navigate('Artist', {artistName});
  };

  render() {
    const {props} = this;
    const {genreArtists, defaultArtists} = props;
    let {numberOfPages} = genreArtists || {};
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

    if (isEmpty(defaultArtists)) {
      return <View>
        <Text h1>Error, reload</Text>
      </View>
    }
    return (
      <View
      >
        <GenreArtistView
          defaultArtists={defaultArtists}
          fetchData={this.props.fetchGenreArtists}
          onPress={this.onPress}
        />
      </View>
    );
  }
}
function mapStateToProps(state) {
  const {defaultArtists, genreArtists} = state.genreArtistReducer;
  return {defaultArtists, genreArtists};
}

function mapDispatchToProps(dispatch) {
  const {fetchGenreArtists} = genreArtistAction;
  return bindActionCreators({fetchGenreArtists}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreArtistScreen);
