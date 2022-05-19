import './style.css';
import './modules/app.js';
import displayData from './modules/loadData.js';
import addLike from './modules/addLike.js';
import displayLikes from './modules/viewLikes.js';
import popup from './modules/commentPopup.js';

const getData = async () => (await fetch('https://api.tvmaze.com/shows/169/seasons')).json();

window.onload = displayData().then(() => {
  displayLikes();
  const Commentbuttons = document.querySelectorAll('.comments-button');
  Commentbuttons.forEach((button) => {
    button.addEventListener('click', async (e) => {
      const appData = await getData().then((response) => response);
      const data = appData.filter((item) => item.id === +(e.target.id));
      popup({
        info1: data[0].premiereDate,
        info2: `Episodes: ${data[0].episodeOrder}`,
        info3: `Network: ${data[0].network.name}`,
        info4: `End Date: ${data[0].endDate}`,
        imageLink: data[0].image.original,
        number: data[0].number,
      });
    });
  });
  const likeIcon = document.querySelectorAll('.like-icon');
  likeIcon.forEach((e) => {
    const item = e.getAttribute('id');
    e.addEventListener('click', (event) => {
      addLike(item);
      event.preventDefault();
    });
  });
});
