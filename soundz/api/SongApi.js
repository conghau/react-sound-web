/**
 * Created by hautruong on 7/7/18.
 */
import { BASE_API_URI } from '../constants/System';
import axios from 'axios';

export const songApi = {
  fetchSong,
  fetchSuggestSong
};

function fetchSong({ name, id }) {
  const requestOptions = {
    method: 'GET',
    // headers: authHeader()
    params: { name, id }
  };
  return axios.get(`${BASE_API_URI}/media/song`, requestOptions);
}

function fetchSuggestSong({ artistId, songId }) {
  const requestOptions = {
    method: 'GET',
    params: { artistId, songId }
  };

  return axios.get(`${BASE_API_URI}/media/suggested-song`, requestOptions);
}
