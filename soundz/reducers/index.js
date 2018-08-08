/**
 * Created by hautruong on 7/31/18.
 */

import {combineReducers} from 'redux';
import songReducer from './songReducer'
import genreArtistReducer from './genreArtistReducer'
import artistReducer from './artistReducer'

export default combineReducers({
  songReducer,
  genreArtistReducer,
  artistReducer
});