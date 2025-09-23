const api = require('./client');

async function getPost(id) {
  const res = await api.get(`/posts/${id}`);
  return res.data;
}

async function createPost(payload) {
  const res = await api.post('/posts', payload);
  return res.data;
}

module.exports = { getPost, createPost };
