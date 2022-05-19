import likeCounter from './likeCounter.js';

describe('test like count function', () => {
  test('return exact number of likes', () => {
    const data = [{ item_id: 'item1', likes: 5 }];
    const count = likeCounter('item1', data);
    expect(count).toBe(5);
  });
});