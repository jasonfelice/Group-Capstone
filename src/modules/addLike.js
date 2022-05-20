import { Movies } from './resource.js';
import displayLikes from './viewLikes.js';

const addLike = (item) => {
  const obj = new Movies();
  const payload = { item_id: item };
  obj.addLike(payload).then((response) => {
    if (response) {
      displayLikes();
    }
  });
};

export default addLike;