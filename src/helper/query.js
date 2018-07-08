export const pageQuery = function(page) {
  return page ? `?page=${page}` : '';
};

export function buildQueryString(params) {
  if (!params) {
    return '';
  }
  let esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
}
