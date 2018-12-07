import axios from "axios";

export const createWord = data => {
  const url = "https://fun-english.herokuapp.com/words";
  return axios({
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(data)
  });
};

export const deleteWord = id => {
  const url = "https://fun-english.herokuapp.com/word/" + id;
  return axios({
    url: url,
    method: "DELETE"
  });
};
