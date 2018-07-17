/**
 * Created by hautruong on 7/7/18.
 */
import * as types from './actionConstant';
import { songAction } from './songActions';
import { removeById, changeAlias, isEmpty } from '../helper/func';
import { get } from 'lodash';

export const queueAction = {
  addSongToQueue,
  removeSongFromQueue,
  togglePushRoute,
  replaceQueue,
  clearQueue,
  playUserPlaylist
};

function addSongToQueue(song) {
  const { name, id } = song;
  return (dispatch, getState) => {
    const queue = getState().queueState.queue;

    if (!queue.length) {
      // if the queue doesn't have any songs, fetch this song and play it

      dispatch(songAction.fetchSong({ name, id }));
    } else {
      dispatch({ type: types.ADD_SONG_TO_QUEUE, song });
    }
  };
}

function removeSongFromQueue(id) {
  console.log('removeSongFromQueue');
  return (dispatch, getState) => {
    const queueState = getState().queueReducer;
    const queue = [...queueState.queue]; // avoid mutating the state
    const newQueue = removeById(queue, id);
    const queueIds = removeById([...queueState.ids], id);

    dispatch({
      type: types.REMOVE_SONG_FROM_QUEUE,
      queue: newQueue,
      ids: queueIds
    });
  };
}

function togglePushRoute(bool) {
  return {
    type: types.TOGGLE_PUSH_ROUTE_SUCCESS,
    flag: bool
  };
}

function tweakSongs(songs) {
  const ids = [];
  songs = songs.map(song => {
    ids.push(song.id);
    return {
      id: song.id,
      name: song.title,
      artist:
        song.artist_text ||
        (song.artists &&
          Array.isArray(song.artists) &&
          song.artists.map(artist => artist.name).join(', ')),
      alias: song.alias,
      ...(song.thumbnail && { thumbnail: song.thumbnail })
    };
  });

  return { songs, ids };
}

function replaceQueue(songs) {
  return (dispatch, getState) => {
    const songData = getState().songData.data;
    // play the first song in the queue if there is no song playing
    if (isEmpty(songData)) {
      dispatch({ type: types.REPLACE_QUEUE_SUCCESS, ...tweakSongs(songs) });
      const { alias, id, name } = songs[0];

      dispatch(songAction.fetchSong({ name: alias || changeAlias(name), id }));
      // dispatch(fetchSuggestedSongs(id));
    } else {
      dispatch({ type: types.REPLACE_QUEUE_SUCCESS, ...tweakSongs(songs) });
    }
  };
}

function clearQueue() {
  return (dispatch, getState) => {
    const state = getState();
    const playingSongId = get(state, 'songReducer.songData.id', 0);
    const queueReducer = state.queueReducer;
    const clearedQueue = queueReducer.queue.filter(
      song => song.id === playingSongId
    );
    const newQueueIds = queueReducer.ids.filter(id => id === playingSongId);

    dispatch({
      type: types.CLEAR_QUEUE,
      queue: clearedQueue,
      ids: newQueueIds
    });
  };
}

function playUserPlaylist(songs) {
  return {
    type: types.PLAY_USER_PLAYLIST,
    ids: songs.map(song => song.id),
    queue: songs
  };
}
