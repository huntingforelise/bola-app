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

export const getUsers = () =>
  fetch(`${baseURL}/users`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => err);

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

export const joinGame = (gameBody, userBody) => {
  const gameId = gameBody._id;
  const userId = userBody._id;
  return fetch(`${baseURL}/games/${gameId}/join`, {
    method: "PUT",
    body: JSON.stringify({ userId }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const unJoinGame = (gameBody, userBody) => {
  const gameId = gameBody._id;
  const userId = userBody._id;
  return fetch(`${baseURL}/games/${gameId}/unjoin`, {
    method: "PUT",
    body: JSON.stringify({ userId }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
