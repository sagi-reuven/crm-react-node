export function getImages() {
  const results = fetch("https://jsonplaceholder.typicode.com/photos").then((data) => data.json());
  return results;
}

export default getImages;
