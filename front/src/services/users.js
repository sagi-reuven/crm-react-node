export function getUsers() {
  const results = fetch("https://jsonplaceholder.typicode.com/users").then((data) => data.json());
  return results;
}

export default getUsers;
