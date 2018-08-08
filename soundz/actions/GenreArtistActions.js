/**
 * Created by hautruong on 7/7/18.
 */
import * as types from '../constants/Actions'
import { artistApi } from '../api/ArtistApi';
import { isUndefined, isEmpty } from 'lodash';
import { CONST_GENRE_ARTIST } from '../constants/System';
import { createStackNavigator } from 'react-navigation';

export const genreArtistAction = {
  fetchGenreArtists
};

function fetchGenreArtists({ genre, id, page } = {}) {
  let type =
    isUndefined(genre) || isEmpty(genre)
      ? CONST_GENRE_ARTIST.VIEW_DEFAULT
      : CONST_GENRE_ARTIST.VIEW_DETAIL;
  return dispatch => {
    return artistApi
      .fetchGenreArtists({ genre, id, page })
      .then(({ data }) => {
        dispatch(success({ artists: data.origins, type }));
      })
      .catch(err => {
        dispatch(failure(err, type));
        throw err;
      });
  };

  function success({ artists, type }) {
    if (type === CONST_GENRE_ARTIST.VIEW_DEFAULT) {
      return {
        type: types.FETCH_GENRE_ARTISTS_SUCCESS,
        data: { defaultArtists: artists }
      };
    } else {
      return {
        type: types.FETCH_GENRE_DETAIL_ARTISTS_SUCCESS,
        data: { genreArtists: artists }
      };
    }
  }

  function failure(error, type) {
    if (type === CONST_GENRE_ARTIST.VIEW_DEFAULT) {
      return {
        type: types.FETCH_GENRE_ARTISTS_ERROR,
        error
      };
    } else {
      return {
        type: types.FETCH_GENRE_DETAIL_ARTISTS_ERROR,
        error
      };
    }
  }
}
