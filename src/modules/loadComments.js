export default async (id) => {
  const getComments = async () => (await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mU67F6D8b0eq3yf1Ab3T/comments?item_id=${id}`)).json();
  return getComments().then((res) => res);
};