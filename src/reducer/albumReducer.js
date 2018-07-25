import { chunk, range } from 'lodash';
// import {range} from '../utils/func';
import * as types from '../actions/actionConstant';

const initialState = {
  defaultAlbums: [],
  albums: [],
  numberOfPages: 0,
  pageChunkIndex: 0,
  pageChunks: [],
  playlist: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DEFAULT_ALBUMS_SUCCESS:
      return { ...state, defaultAlbums: action.data };

    case types.FETCH_ALBUMS_SUCCESS:
      const { albums, numberOfPages } = action.data[0];
      return { ...state, ...{ albums, numberOfPages } };

    case types.CLEAR_ALBUMS:
      return { ...state, albums: [] };

    case types.SET_NUMBER_OF_PAGES:
      return {
        ...state,
        numberOfPages: action.numberOfPages,
        pageChunks: chunk(range(action.numberOfPages), 7)
      };

    case types.FETCH_ALBUM_PLAYLIST:
      return { ...state, playlist: action.playlist };

    case types.CHANGE_PAGE_CHUNK_INDEX:
      return { ...state, pageChunkIndex: action.pageChunkIndex };

    case types.CLEAR_PLAYLIST:
      return { ...state, playlist: {} };

    default:
      return state;
  }
}
