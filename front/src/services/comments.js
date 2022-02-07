export function getComments() {
  const results = fetch("https://jsonplaceholder.typicode.com/comments").then((data) =>
    data.json()
  );
  return results;
}

export default getComments;
