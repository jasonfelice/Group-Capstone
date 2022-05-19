import addComment from './addComment.js';
import commentsCounter from './commentsCounter.js';

describe('Comments counter tests', () => {
  test('Add one and count comments', () => {
    document.body.innerHTML = `
    <div class="comments">
    <h3>Comments</h3>
    <div class="recent-comments"></div>
    </div>
    `;
    addComment({ name: 'Jake', comment: 'First Test' });
    expect(commentsCounter()).toBe(1);
  });
  test('Add five and count comments', () => {
    document.body.innerHTML = `
    <div class="comments">
    <h3>Comments</h3>
    <div class="recent-comments"></div>
    </div>
    `;
    addComment({ name: 'Test', comment: 'Comment 1' });
    addComment({ name: 'Test', comment: 'Comment 2' });
    addComment({ name: 'Test', comment: 'Comment 3' });
    addComment({ name: 'Test', comment: 'Comment 4' });
    addComment({ name: 'Test', comment: 'Comment 5' });
    expect(commentsCounter()).toBe(5);
  });
});