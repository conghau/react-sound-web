/**
 * Created by hautruong on 7/7/18.
 */
import { BASE_API_URI } from '../constants';
import axios from 'axios';

export const artistApi = {
  fetchGenreArtists
};

function fetchGenreArtists({ genre, id, page } = {}) {
  const requestOptions = {
    method: 'GET',
    // headers: authHeader()
    params: { genre, id, page }
  };

  return axios.get(`${BASE_API_URI}/media/genre-artists`, requestOptions);
}
