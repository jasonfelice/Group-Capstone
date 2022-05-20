import addComment from './addComment.js';

export default async ({ id, username, comment }) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mU67F6D8b0eq3yf1Ab3T/comments';
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  }).then(() => {
    addComment({
      name: username,
      comment,
    });
  });
};