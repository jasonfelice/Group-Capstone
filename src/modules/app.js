import getData from './getData.js';

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
