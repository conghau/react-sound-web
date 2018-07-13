/**
 * Created by hautruong on 7/7/18.
 */
import * as types from '../actions/actionConstant';

const initialState = {
  playedPercent: undefined,
  lyric1: '',
  lyric2: '',
  per1: 0,
  per2: 0
};
export default function(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_LYRIC:
      return { ...state, ...action.lyrics };

    case types.UPDATE_LYRIC_PERCENT:
      return Object.assign({}, state, action.payload);

    case types.UPDATE_PLAYED_PERCENT:
      return { ...state, playedPercent: action.playedPercent };
    default:
      return state;
  }
}
