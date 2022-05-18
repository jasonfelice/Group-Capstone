export default ({ name, comment }) => {
  const commentsWrapper = document.querySelector('.recent-comments');
  const commentBox = document.createElement('div');
  commentBox.classList.add('comment-box');
  commentBox.innerHTML = `<span>${name}</span><span>${comment}</span>`;
  commentsWrapper.appendChild(commentBox);
};