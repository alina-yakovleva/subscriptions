import { baseURL } from "./config";

export const editIncome = (id, income) =>
  fetch(`${baseURL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ income }),
  }).then((response) => response.json());
