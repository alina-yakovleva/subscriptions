export const getSubs = (value = "") =>
  fetch(`http://localhost:3001/subscriptions?q=${value}`).then((response) =>
    response.json()
  );

export const deleteSub = (id) =>
  fetch(`http://localhost:3001/subscriptions/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());

export const addSub = (sub) =>
  fetch("http://localhost:3001/subscriptions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(sub),
  }).then((response) => response.json());

export const editSub = (id, data) =>
  fetch(`http://localhost:3001/subscriptions/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
