/**
 * Created by hautruong on 7/7/18.
 */
import { BASE_API_URI } from '../constants';
import axios from 'axios';

export const artistApi = {
  fetchGenreArtists,
  fetchArtistSong,
  fetchArtistAlbums,
  fetchArtistInfo
};

function fetchGenreArtists({ genre, id, page } = {}) {
  const requestOptions = {
    method: 'GET',
    // headers: authHeader()
    params: { genre, id, page }
  };
  console.log(process.env.NODE_ENV);
  return axios.get(`${BASE_API_URI}/media/genre-artists`, requestOptions);
}

function fetchArtistSong({ name, page } = {}) {
  const requestOptions = {
    method: 'GET',
    params: { page }
  };

  return axios.get(
    `${BASE_API_URI}/media/artist/${name}/songs`,
    requestOptions
  );
}

function fetchArtistAlbums({ name, page } = {}) {
  const requestOptions = {
    method: 'GET',
    params: { page }
  };

  return axios.get(
    `${BASE_API_URI}/media/artist/${name}/albums`,
    requestOptions
  );
}

function fetchArtistInfo({ name, page } = {}) {
  const requestOptions = {
    method: 'GET',
    params: { page }
  };

  return axios.get(
    `${BASE_API_URI}/media/artist/${name}/information`,
    requestOptions
  );
}
