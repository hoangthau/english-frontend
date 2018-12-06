export const createWord = data => {
  const url = "https://fun-english.herokuapp.com/words";
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

export const deleteWord = id => {
  const url = "https://fun-english.herokuapp.com/word/" + id;
  return fetch(url, {
    method: "DELETE"
  });
};
