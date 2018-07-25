/**
 * Created by hautruong on 7/7/18.
 */
import { BASE_API_URI } from '../constants';
import axios from 'axios';

export const albumApi = {
  fetchDefaultAlbums,
  fetchAlbum,
  fetchAlbumPlaylist
};

function fetchDefaultAlbums() {
  const requestOptions = {
    method: 'GET'
  };

  return axios.get(`${BASE_API_URI}/media/album/default`, requestOptions);
}

function fetchAlbum({ genre, id, page }) {
  const requestOptions = {
    method: 'GET',
    params: { genre, id, page }
  };

  return axios.get(`${BASE_API_URI}/media/albums`, requestOptions);
}

function fetchAlbumPlaylist({ title, id }) {
  const requestOptions = {
    method: 'GET',
    params: { title, id }
  };
  return axios.get(`${BASE_API_URI}/media/album_playlist`, requestOptions);
}
