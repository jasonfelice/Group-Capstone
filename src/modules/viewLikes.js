import { Movies } from './resource.js';
import likeCounter from './likeCounter.js';

const displayLikes = ()=> {
  const obj = new Movies();
  obj.getLike().then((response) => {
    if (response) {
      response.forEach((element) => {
        const like = document.getElementById(element.item_id);
        const count = likeCounter(element.item_id, response);
        if (like) {
          const textNode = `<span>${count} likes </span>`;
          like.innerHTML = textNode;
        }
      });
    }
  });
}

export default displayLikes;