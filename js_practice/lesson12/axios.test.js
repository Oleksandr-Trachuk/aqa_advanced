const api = require('./apiClient');

describe('JSONPlaceholder via axios', () => {
  jest.setTimeout(15000);

  test('GET /posts/1 — валідний пост', async () => {
    const res = await api.get('/posts/1');
    expect(res.status).toBe(200);
    expect(res.data).toBeDefined();
    expect(res.data.id).toBe(1);
    expect(typeof res.data.userId).toBe('number');
    expect(typeof res.data.title).toBe('string');
    expect(typeof res.data.body).toBe('string');
  });

  test('GET /users/1 — валідний користувач', async () => {
    const res = await api.get('/users/1');
    expect(res.status).toBe(200);
    const user = res.data;
    expect(user.id).toBe(1);
    expect(typeof user.name).toBe('string');
    expect(typeof user.email).toBe('string');
    expect(user.email).toMatch(/@/);
  });

  test('GET /todos/1 — валідний todo', async () => {
    const res = await api.get('/todos/1');
    expect(res.status).toBe(200);
    const todo = res.data;
    expect(todo.id).toBe(1);
    expect(typeof todo.title).toBe('string');
    expect(typeof todo.completed).toBe('boolean');
  });

  test('POST /posts — створення поста (симуляція)', async () => {
    const payload = { title: 'foo', body: 'bar', userId: 1 };
    const res = await api.post('/posts', payload);
    expect([200, 201]).toContain(res.status);
    expect(res.data).toMatchObject(payload);
    expect(typeof res.data.id).toBe('number');
  });

  test('POST /users — створення користувача (симуляція)', async () => {
    const payload = { name: 'Test User', username: 'tuser', email: 'tuser@example.com' };
    const res = await api.post('/users', payload);
    expect([200, 201]).toContain(res.status);
    expect(res.data).toMatchObject(payload);
    expect(typeof res.data.id).toBe('number');
  });
});
