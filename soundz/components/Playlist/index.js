import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem,} from "react-native-elements";

const Playlist = props => {
  const {songs, className} = props;

  return (
    <List className={`${className} playlist-tracks`}>
      {songs &&
      songs.map((l, index) => (
        <ListItem
          roundAvatar
          key={l.id}
          title={l.title}
          subtitle={l.artist_text}
          onPress={() => props.onClickSong(l.id)}
        />
      ))}
    </List>
  );
};

Playlist.propTypes = {
  songs: PropTypes.array.isRequired,
  onClickSong: PropTypes.func,
};

export default Playlist;
