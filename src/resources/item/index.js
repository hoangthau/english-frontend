export const createItem = data => {
  const url = "https://fun-english.herokuapp.com/items";
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};
