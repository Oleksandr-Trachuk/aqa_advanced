const { fetchBadUrl } = require('./task1');

describe('Task1: bad URL error handling', () => {
  jest.setTimeout(15000);

  test('returns ok:false and meaningful message on error', async () => {
    const res = await fetchBadUrl();
    expect(res.ok).toBe(false);
    expect(typeof res.message).toBe('string');
    expect(res.message).toMatch(/HTTP\s+404|Network|Error/i);
  });
});
