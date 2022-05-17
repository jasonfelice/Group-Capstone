import getData from './getData.js';
import popup from './commentPopup.js';

const button = document.querySelector('button');
let appData = [];

async function update() {
  try {
    appData = await getData();
  } catch (e) {
    return `Error! ${e}`;
  }
  return 'Updated';
}

update();
