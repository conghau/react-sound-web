import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Text, View, StyleSheet, Image, ScrollView} from "react-native";
import {songAction} from '../actions/SongAction'
import {isEmpty, get} from 'lodash';
// import {} from "expo"
import Video from 'react-native-video';
import device from '../constants/Layout'
import {List, ListItem} from "react-native-elements";


class SongScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
    super(props);

    this.state = {
      songId: this.props.navigation.getParam('songId', ''),
      songName: this.props.navigation.getParam('songName', ''),
      mute: false,
      shouldPlay: true,
    }
  }

  componentWillMount() {
    console.log('componentWillMount');
    let name = 'Dung-Nhu-Thoi-Quen-JayKii-Sara-Luu';
    let id = 'ZW9C0WDI';
    this.onFetchSong(name, id);
    // let {songId, songName} = this.state;
    // this.onFetchSong(songName, songId);
  }

  onFetchSong = (name, id) => {
    this.props.fetchSong({name, id}).then(resp => {
      this.setState({songId: id, songName: name});
    })
  };

  componentWillUnMount() {
    console.log('componentWillUnMount');
    // this.props.fetchSong({name, id})
  }

  handlePlayAndPause = () => {
    this.setState((prevState) => ({
      shouldPlay: !prevState.shouldPlay
    }));
  }

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,
    }));
  }

  renderPlayer = (songData) => {
    // let uri = 'http://zmp3-mp3-s1.zadn.vn/eca53988eecc07925edd/7423535743815512881?authen=exp=1533213703~acl=/eca53988eecc07925edd/*~hmac=8cc678c98f084e57699200913015bb0d';
    // let uri = 'http://techslides.com/demos/sample-videos/small.mp4';

    if (isEmpty(songData)) {
      return null;
    }

    let {source, type} = songData;
    let uri = '';
    if (type === 'audio') {
      uri = `https:${source['320'] || source['128']}`;
    } else {
      uri = get(source, 'mp4.480p', null) || get(source, 'mp4.360p', null);
    }
    console.log(uri);
    // let uri = 'https://gcs-vimeo.akamaized.net/exp=1533639482~acl=%2A%2F584924588.mp4%2A~hmac=401ada1729110d5a4bfe246d5f5e81a5dffde62f9d1a13a93b78251e1fc3d1a3/vimeo-prod-skyfire-std-us/01/525/7/177625290/584924588.mp4';
    return (
      <Video
        source={{uri: uri}}   // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref
        }}
        rate={1.0}
        volume={1.0}
        muted={false}
        paused={false}
        resizeMode="contain"
        style={styles.video}
        audioOnly={type === 'audio'}
        controls={true}
      />
    )
  };

  renderSuggestSong = (suggestedSongs) => {
    if (isEmpty(suggestedSongs)) {
      return null;
    }
    let {items} = suggestedSongs;
    return (
      <List>
        {
          items.map((l, i) => {
            return <ListItem avatar={l.thumbnail}
                             title={l.name}
                             subtitle={l.artists_names}
                             key={i}
                             onPress={() => {
                               this.onFetchSong(l.name, l.id)
                             }}
            />
          })
        }
      </List>
    )
  }

  render() {
    const {songReducer} = this.props;
    const {songData, suggestedSongs} = songReducer || {};

    if (isEmpty(songData)) {
      return <Text>Loading...</Text>;
    }
    let {cover, thumbnail, name} = songData;
    console.log(songData);


    return <ScrollView>
      <Text>Song Page: {name}</Text>
      <Image
        source={{uri: cover || thumbnail}}
        style={{width: device.window.width, height: 180}}
      />
      <View style={styles.backgroundVideo}>
        {this.renderPlayer(songData)}
      </View>
      {this.renderSuggestSong(suggestedSongs)}
    </ScrollView>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    counter: state.counter,
    songReducer: state.songReducer
  };
}

function mapDispatchToProps(dispatch) {
  const {fetchSong} = songAction;
  return bindActionCreators({fetchSong}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SongScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },

  video: {
    borderWidth: 1,
    borderColor: '#d6d7da',
    minWidth: 400,
    minHeight: 300
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});