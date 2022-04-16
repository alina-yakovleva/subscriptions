export const getSubs = () =>
  fetch("http://localhost:3001/subscriptions").then((response) =>
    response.json()
  );
