function likeCounter(item, data) {
  const likes = data.filter((v) => v.item_id === item);
  const count = likes.map((c) => c.likes);
  const total = count.reduce((a, b) => a + b, 0);
  return total;
}

export default likeCounter;