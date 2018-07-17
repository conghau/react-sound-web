/**
 * Created by hautruong on 7/7/18.
 */
import { BASE_API_URI } from '../constants';
import axios from 'axios';

export const trackApi = {
  fetchTrack,
  fetchChart
};

function fetchTrack(page, id) {
  const requestOptions = {
    method: 'GET',
    // headers: authHeader()
    params: { page }
  };
  return axios.get(`${BASE_API_URI}/media/top100/${id}`, requestOptions);
}

function fetchChart(type) {
  const requestOptions = {
    method: 'GET'
    // headers: authHeader()
  };
  return axios.get(`${BASE_API_URI}/media/chart/${type}`, requestOptions);
}
