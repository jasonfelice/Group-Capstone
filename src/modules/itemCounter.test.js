import itemCounter from './itemCounter.js';

describe('Items counter test', () => {
  test('Adding Items to DOM', () => {
    document.body.innerHTML = `
    <div class="list">
    <div class="list-item"></div>
    </div>
    `;
    expect(itemCounter()).toBe(1);
  });
});