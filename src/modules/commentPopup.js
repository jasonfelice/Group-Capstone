import postComment from './addComment.js';

export default ({
  info1, info2, info3, info4, imageLink, number,
}) => {
  const mainWrapper = document.createElement('div');
  mainWrapper.classList.add('comment-wrapper');
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('comment-container');
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('cross-icon');
  closeIcon.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.remove();
  });
  const posterImage = document.createElement('img');
  posterImage.setAttribute('alt', 'Breaking Bad Poster');
  posterImage.setAttribute('src', imageLink);
  posterImage.classList.add('image');
  const title = document.createElement('h2');
  title.textContent = `Season ${number}`;
  const itemInfo1 = document.createElement('div');
  itemInfo1.classList.add('item-info');
  itemInfo1.innerHTML = `<span>${info1}</span><span>${info2}</span>`;
  const itemInfo2 = document.createElement('div');
  itemInfo2.classList.add('item-info');
  itemInfo2.innerHTML = `<span>${info3}</span><span>${info4}</span>`;
  const comments = document.createElement('div');
  comments.classList.add('comments');
  const cSubTitle = document.createElement('h3');
  cSubTitle.textContent = 'Comments';
  const recentComments = document.createElement('div');
  recentComments.classList.add('recent-comments');
  comments.appendChild(cSubTitle);
  comments.appendChild(recentComments);
  const addComment = document.createElement('div');
  addComment.classList.add('add-comment');
  const aSubTitle = document.createElement('h3');
  aSubTitle.textContent = 'Add a comment';
  addComment.appendChild(aSubTitle);
  const form = document.createElement('form');
  form.classList.add('comment-form');
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('Placeholder', 'Name');
  const commentInput = document.createElement('textarea');
  commentInput.setAttribute('Placeholder', 'Your comment');
  const button = document.createElement('button');
  button.textContent = 'Submit';
  button.setAttribute('type', 'submit');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    postComment({
      name: nameInput.value,
      comment: commentInput.value,
    });
  });
  form.appendChild(nameInput);
  form.appendChild(commentInput);
  form.appendChild(button);
  addComment.appendChild(form);
  contentWrapper.appendChild(closeIcon);
  contentWrapper.appendChild(posterImage);
  contentWrapper.appendChild(title);
  contentWrapper.appendChild(itemInfo1);
  contentWrapper.appendChild(itemInfo2);
  contentWrapper.appendChild(comments);
  contentWrapper.appendChild(addComment);
  mainWrapper.appendChild(contentWrapper);
  document.querySelector('main').appendChild(mainWrapper);
};