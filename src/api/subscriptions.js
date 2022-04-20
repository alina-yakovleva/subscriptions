import { baseURL } from "./baseURL";

export const getSubs = (value = "") =>
  fetch(`${baseURL}subscriptions?q=${value}`).then((response) =>
    response.json()
  );

export const deleteSub = (id) =>
  fetch(`${baseURL}subscriptions/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());

export const addSub = (sub) =>
  fetch(`${baseURL}/subscriptions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(sub),
  }).then((response) => response.json());

export const editSub = (id, data) =>
  fetch(`${baseURL}/subscriptions/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
