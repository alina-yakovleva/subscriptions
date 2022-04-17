export const getSubs = () =>
  fetch("http://localhost:3001/subscriptions").then((response) =>
    response.json()
  );

export const deleteSub = (id) =>
  fetch(`http://localhost:3001/subscriptions/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
