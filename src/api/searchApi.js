/**
 * Created by hautruong on 7/14/18.
 */
/**
 * Created by hautruong on 7/7/18.
 */
import { BASE_API_URI } from '../constants';
import axios from 'axios';

export const searchApi = {
  searchMedia
};

function searchMedia(keyword) {
  console.log('searchMedia');
  const requestOptions = {
    method: 'GET',
    // headers: authHeader()
    params: { term: keyword }
  };
  return axios.get(`${BASE_API_URI}/media/search`, requestOptions);
}
