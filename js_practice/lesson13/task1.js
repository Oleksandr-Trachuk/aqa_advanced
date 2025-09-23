const api = require('./client');
async function fetchBadUrl() {
  try {
    await api.get('/this-endpoint-does-not-exist');
    return { ok: true, message: 'unexpected success' };
  } catch (err) {
    if (err.response) {
      return {
        ok: false,
        message: `HTTP ${err.response.status}: ${err.response.statusText || 'Error'}`,
      };
    }
    return { ok: false, message: err.message || 'Network error' };
  }
}

module.exports = { fetchBadUrl };
