import * as types from './actionConstant';
import { CONST_ALBUM } from '../constants';
import { albumApi } from '../api/albumApi';
import { isEmpty } from 'lodash';

export const albumAction = {
  clearAlbums,
  setNumberOfPages,
  changePageChunkIndex,
  // fetchDefaultAlbums,
  fetchAlbums,
  fetchAlbumPlaylist,
  clearPlaylist
};

function clearAlbums() {
  return {
    type: types.CLEAR_ALBUMS
  };
}

function setNumberOfPages(numberOfPages) {
  return {
    type: types.SET_NUMBER_OF_PAGES,
    numberOfPages
  };
}

function changePageChunkIndex(pageChunkIndex) {
  return {
    type: types.CHANGE_PAGE_CHUNK_INDEX,
    pageChunkIndex
  };
}

function fetchAlbums({ genre, id, page } = {}) {
  let type =
    typeof genre === 'undefined' || isEmpty(genre)
      ? CONST_ALBUM.VIEW_DEFAULT
      : CONST_ALBUM.VIEW_DETAIL;
  return dispatch => {
    albumApi
      .fetchAlbum({ genre, id, page })
      .then(({ data }) => {
        dispatch(success({ album: data.origins, type }));
      })
      .catch(err => {
        dispatch(failure(err, type));
        throw err;
      });
  };

  function success({ album, type }) {
    if (type === CONST_ALBUM.VIEW_DEFAULT) {
      return {
        type: types.FETCH_DEFAULT_ALBUMS_SUCCESS,
        data: album
      };
    } else {
      return {
        type: types.FETCH_ALBUMS_SUCCESS,
        data: album
      };
    }
  }

  function failure(error, type) {
    if (type === CONST_ALBUM.VIEW_DEFAULT) {
      return {
        type: types.FETCH_DEFAULT_ALBUMS_ERROR,
        error
      };
    } else {
      return {
        type: types.FETCH_ALBUMS_ERROR,
        error
      };
    }
  }
}

// function fetchDefaultAlbums() {
//   return dispatch => {
//     albumApi.fetchDefaultAlbums()
//       .then(({data}) => {
//         if (data.result && data.origins.length) {
//           dispatch({type: types.FETCH_DEFAULT_ALBUMS, defaultAlbums: data.origins});
//           dispatch(clearAlbums()); // clear the albums data
//         }
//       })
//       .catch(err => {
//         throw err;
//       });
//   };
// }
//
// function fetchAlbums({genre, id, page}) {
//   page = page ? page : 1;
//   return dispatch => {
//
//     albumApi.fetchAlbum({genre, id, page})
//       .then(({data}) => {
//         if (data.albums && data.albums.length) {
//           dispatch({type: types.FETCH_ALBUMS, albums: data.albums});
//
//           dispatch(setNumberOfPages(data.numberOfPages));
//         }
//       })
//       .catch(err => {
//         throw err;
//       });
//   };
// }

function fetchAlbumPlaylist({ title, id }) {
  return dispatch => {
    albumApi
      .fetchAlbumPlaylist({ title, id })
      .then(({ data }) => {
        dispatch({ type: types.FETCH_ALBUM_PLAYLIST, playlist: data });
      })
      .catch(err => {
        throw err;
      });
  };
}

function clearPlaylist() {
  return { type: types.CLEAR_PLAYLIST };
}
