/**
 * Created by hautruong on 7/7/18.
 */
import * as types from './actionConstant';
import { artistApi } from '../api/artistApi';

export const artistAction = {
  fetchArtist
};

function fetchArtist(name, type = 'songs', page = 1) {
  if (page) {
    page = 1;
  }
  switch (type) {
    case 'songs':
      console.log('fetchArtistSong');
      return fetchArtistSong({ name, page });
    case 'albums':
      return fetchArtistAlbums({ name, page });
    case 'information':
      return fetchArtistInfo({ name, page });
    default:
      return {};
  }
}

function fetchArtistSong({ name, page } = {}) {
  return dispatch => {
    artistApi
      .fetchArtistSong({ name, page })
      .then(({ data }) => {
        dispatch(success({ artist: data }));
      })
      .catch(err => {
        dispatch(failure(err));
        throw err;
      });
  };

  function success({ artist }) {
    return {
      type: types.FETCH_SINGLE_ARTIST_SONGS_SUCCESS,
      data: { artist: artist }
    };
  }

  function failure(error) {
    return {
      type: types.FETCH_SINGLE_ARTIST_SONGS_ERROR,
      error
    };
  }
}
function fetchArtistAlbums({ name, page } = {}) {
  return dispatch => {
    artistApi
      .fetchArtistSong({ name, page })
      .then(({ data }) => {
        dispatch(success({ artists: data }));
      })
      .catch(err => {
        dispatch(failure(err));
        throw err;
      });
  };

  function success({ artists }) {
    return {
      type: types.FETCH_SINGLE_ARTIST_SONGS_SUCCESS,
      data: { artists: artists }
    };
  }

  function failure(error) {
    return {
      type: types.FETCH_SINGLE_ARTIST_SONGS_ERROR,
      error
    };
  }
}
function fetchArtistInfo({ name, page } = {}) {
  return dispatch => {
    artistApi
      .fetchArtistSong({ name, page })
      .then(({ data }) => {
        dispatch(success({ artists: data }));
      })
      .catch(err => {
        dispatch(failure(err));
        throw err;
      });
  };

  function success({ artists }) {
    return {
      type: types.FETCH_SINGLE_ARTIST_SONGS_SUCCESS,
      data: { artists: artists }
    };
  }

  function failure(error) {
    return {
      type: types.FETCH_SINGLE_ARTIST_SONGS_ERROR,
      error
    };
  }
}
