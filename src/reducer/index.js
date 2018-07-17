/**
 * Created by hautruong on 6/29/18.
 */

import { combineReducers } from 'redux';
import genreArtistReducer from './genreArtistReducer';
import artistReducer from './artistReducer';
import songReducer from './songReducer';
import UIReducer from './uiReducer';
import authReducer from './authReducer';
import queueReducer from './queueReducer';
import playerReducer from './playerReducer';
import trackReducer from './trackReducer';
import chartReducer from './chartReducer';

export default combineReducers({
  playerReducer,
  genreArtistReducer,
  artistReducer,
  songReducer,
  UIReducer,
  authReducer,
  queueReducer,
  trackReducer,
  chartReducer
});
