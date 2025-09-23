jest.mock('axios');

const axios = require('axios');
axios.create.mockReturnValue(axios);

const { getPost, createPost } = require('./service');

describe('Task3: jest.mock axios (success & failure)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('successful GET returns data', async () => {
    const fake = { id: 1, title: 'hello' };
    axios.get.mockResolvedValueOnce({ status: 200, data: fake });

    const data = await getPost(1);

    expect(axios.get).toHaveBeenCalledWith('/posts/1');
    expect(data).toEqual(fake);
  });

  test('failed POST rejects with error having response.status', async () => {
    const payload = { title: 'x' };
    const err = Object.assign(new Error('Server error'), {
      response: { status: 500, data: { message: 'boom' } },
    });
    axios.post.mockRejectedValueOnce(err);

    await expect(createPost(payload)).rejects.toMatchObject({
      response: { status: 500 },
    });

    expect(axios.post).toHaveBeenCalledWith('/posts', payload);
  });
});
