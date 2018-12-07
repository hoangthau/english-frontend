import axios from "axios";

export const createItem = data => {
  const url = "https://fun-english.herokuapp.com/items";
  return axios({
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(data)
  });
};
