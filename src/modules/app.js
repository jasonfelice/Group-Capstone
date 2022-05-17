import getData from './getData.js';
import popup from './commentPopup.js';

const button = document.querySelector('button');

button.addEventListener('click', async (e) => {
  let appData = [];
  try {
    appData = await getData();
  } catch (e) {
    return `Error ${e}`;
  }
  const data = appData.filter((item) => item.id === +(e.target.id));
  popup({
    info1: data[0].premiereDate,
    info2: `Episodes: ${data[0].episodeOrder}`,
    info3: `Network: ${data[0].network.name}`,
    info4: `End Date: ${data[0].endDate}`,
    imageLink: data[0].image.original,
    number: data[0].number,
  });
  return 'Loaded';
});