const AxiosMock = require('axios-mock-adapter');
const api = require('./client');
const { fetchWithHeadersAndParams } = require('./task2');

describe('Task2: headers & params are sent', () => {
  let mock;
  beforeEach(() => {
    mock = new AxiosMock(api);
  });
  afterEach(() => {
    mock.restore();
  });

  test('sends custom headers and query params', async () => {
    mock.onGet(/\/posts.*/).reply(200, []);

    const res = await fetchWithHeadersAndParams({ userId: 5, token: 'secret-token' });
    expect(res.status).toBe(200);

    const last = mock.history.get.at(-1);
    expect(last).toBeDefined();
    expect(last.params).toMatchObject({ userId: 5 });
    expect(last.headers['X-Auth-Token'] || last.headers['x-auth-token']).toBe('secret-token');
    expect(last.headers['X-Custom'] || last.headers['x-custom']).toBe('Demo');
  });
});
