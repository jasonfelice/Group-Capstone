import commentsCounter from './commentsCounter.js';

export default ({ name, comment }) => {
  const headline = document.querySelector('.comments h3');
  const commentsWrapper = document.querySelector('.recent-comments');
  const commentBox = document.createElement('div');
  commentBox.classList.add('comment-box');
  commentBox.innerHTML = `<span>${name}</span><span>${comment}</span>`;
  commentsWrapper.appendChild(commentBox);
  headline.textContent = `Comments (${commentsCounter()})`;
};