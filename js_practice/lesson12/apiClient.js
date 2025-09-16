const axios = require('axios');

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

if (process.env.LOG_AXIOS === '1') {
  api.interceptors.request.use((config) => {
    console.log(`[REQ] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    if (config.data) console.log('[REQ DATA]', config.data);
    return config;
  });

  api.interceptors.response.use(
    (res) => {
      console.log(`[RES] ${res.status} ${res.config.url}`);
      if (res.data && typeof res.data === 'object') {
        const s = JSON.stringify(res.data);
        console.log('[RES DATA]', s.slice(0, 120) + (s.length > 120 ? '…' : ''));
      }
      return res;
    },
    (err) => {
      if (err.response) console.error(`[ERR RES] ${err.response.status} ${err.config?.url}`);
      else console.error('[ERR]', err.message);
      return Promise.reject(err);
    },
  );
}

module.exports = api;
