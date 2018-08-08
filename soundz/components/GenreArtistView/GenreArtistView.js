/**
 * Created by hautruong on 8/7/18.
 */
import React from "react";
import {View, ScrollView, RefreshControl} from "react-native";
import {List, ListItem,} from "react-native-elements";
import {isUndefined, isEmpty} from 'lodash'


const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
];

class GenreArtistView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.props.fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  _onPress = (link) => {
    console.log(this.props);
    let artistName = link.split('/').pop();
    this.props.onPress(artistName);
  };

  renderGender = (artist, i) => {
    return <List containerStyle={{marginBottom: 20}} key={i}>
      {
        artist.map((l, i) => (
          <ListItem
            roundAvatar
            avatar={{uri: l.thumb}}
            key={i}
            title={l.name}
            onPress={() => this._onPress(l.link)}
          />
        ))
      }
    </List>
  };

  render() {
    const {chunkSize, defaultArtists = {}, genreArtists, Card, viewType} = this.props;
    let {artists} = genreArtists || {};
    if (isEmpty(defaultArtists)) {
      console.log('defaultArtists is null');
      return null;
    }
    console.log(defaultArtists);
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        {
          defaultArtists.map((l, i) => {
            return this.renderGender(l.artists, i);
          })
        }
      </ScrollView>
    )
  }
}

export default GenreArtistView;