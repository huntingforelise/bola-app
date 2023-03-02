const baseURL = "http://localhost:3000";

export const postUser = (body) => {
  return fetch(`${baseURL}/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getGames = () =>
  fetch(`${baseURL}/games`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });

export const postGame = (body) => {
  return fetch(`${baseURL}/games`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const joinGame = (body) => {
  const id = body._id;
  return fetch(`${baseURL}/games/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
