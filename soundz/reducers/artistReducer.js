/**
 * Created by hautruong on 7/7/18.
 */
import * as types from '../constants/Actions';

const initialState = {
  artist: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SINGLE_ARTIST_SONGS_SUCCESS:
      let { artist } = action.data;
      return { ...state, ...artist };
    default:
      return state;
  }
}
