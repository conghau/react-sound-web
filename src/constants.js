/**
 * Created by hautruong on 7/7/18.
 */
export const BASE_API_URI =
  process.env.NODE_ENV === 'production'
    ? `https://sound-web-api.herokuapp.com/api`
    : `http://127.0.0.1:5000/api`;
export const CONST_GENRE_ARTIST = {
  VIEW_DEFAULT: 'VIEW_DEFAULT',
  VIEW_DETAIL: 'VIEW_DETAIL'
};

export const CONST_ARTIST = {
  VIEW_DEFAULT: 'VIEW_DEFAULT',
  VIEW_DETAIL: 'VIEW_DETAIL'
};
