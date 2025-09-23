const api = require('./client');
function fetchWithHeadersAndParams({ userId, token }) {
  return api.get('/posts', {
    params: { userId },
    headers: { 'X-Auth-Token': token, 'X-Custom': 'Demo' },
  });
}

module.exports = { fetchWithHeadersAndParams };
