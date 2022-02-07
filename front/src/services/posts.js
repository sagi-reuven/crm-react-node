/* "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est r */
export function getPosts() {
  const results = fetch("https://jsonplaceholder.typicode.com/posts").then((data) => data.json());
  return results;
}

export default getPosts;
