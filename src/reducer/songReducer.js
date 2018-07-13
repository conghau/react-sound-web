/**
 * Created by hautruong on 7/7/18.
 */
import * as types from '../actions/actionConstant';

const initialState = {
  songData: {},
  isFetching: false,
  suggestedSongs: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SINGLE_SONG_SUCCESS:
      let { song } = action.data;
      return { ...state, songData: song, isFetching: false };
    case types.FETCH_SINGLE_SONG_ERROR:
      return { ...state, isFetching: true };
    case types.FETCH_SUGGEST_SONG_SUCCESS:
      let { suggest_song } = action.data;
      return { ...state, suggestedSongs: suggest_song };
    default:
      return state;
  }
}
