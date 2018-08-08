/**
 * Created by hautruong on 7/7/18.
 */
import * as types from '../constants/Actions';

const initialState = {
  defaultArtists: [],
  genreArtists: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_GENRE_ARTISTS_SUCCESS:
      let { defaultArtists } = action.data;
      return { ...state, defaultArtists, genreArtists: {} };
    case types.FETCH_GENRE_DETAIL_ARTISTS_SUCCESS:
      let { genreArtists } = action.data;
      return { ...state, genreArtists: genreArtists[0] };
    default:
      return state;
  }
}
