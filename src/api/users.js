import { baseURL } from "./baseURL";

export const registr = (username, password) =>
  fetch(`${baseURL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ username, password, income: 0, name: "" }),
  }).then((response) => response.json());
