import { baseURL } from "./config";

export const register = (username, password) =>
  fetch(`${baseURL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ username, password, income: 0, name: "" }),
  }).then((response) => response.json());

export const authorize = (username, password) =>
  fetch(`${baseURL}/users?username=${username}&password=${password}`).then(
    (response) => response.json()
  );
