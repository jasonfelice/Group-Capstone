import { Movies } from './resource.js';

function displayLikes() {
  const obj = new Movies();
  obj.getLike().then((response) => {
    if (response) {
      response.forEach((element) => {
        const like = document.getElementById(element.item_id);
        if (like) {
          const textNode = `<span>${element.likes} likes </span>`;
          like.innerHTML = textNode;
        }
      });
    }
  });
}

export default displayLikes;