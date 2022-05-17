export default async function only() {
  return (await fetch('https://api.tvmaze.com/shows/169/seasons')).json();
}