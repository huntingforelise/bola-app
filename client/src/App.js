import "./App.css";
import SignIn from "./components/SignIn";
import GameList from "./components/GameList";
import GameAdd from "./components/GameAdd";
import Profile from "./components/Profile";
import * as ApiClient from "./ApiClientService";
import { useState, useEffect } from "react";
import image from "./assets/image.jpg";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [games, setGames] = useState([]);

  function logIn(user) {
    ApiClient.postUser(user)
      .then((user) => {
        if (user) {
          const output = true;
          setLoggedIn(output);
          setUser(user);
        }
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    ApiClient.getGames()
      .then((games) => setGames(games))
      .catch((error) => console.log(error));
  }, []);

  function postGame(game) {
    ApiClient.postGame({
      date: game.date,
      beach: game.beach,
      maxplayers: game.maxplayers,
      level: game.level,
    })
      .then((newGame) => {
        setGames([...games, newGame]);
      })
      .catch((error) => console.log(error));
  }

  function joinGame(fullGameObject) {
    ApiClient.joinGame(fullGameObject)
      .then((updatedGame) => {
        const newGames = [...games];
        for (const newGame of newGames) {
          if (newGame._id === updatedGame._id) {
            const updatedPlayers = updatedGame.subscribedplayers;
            newGame.subscribedplayers = updatedPlayers;
          }
        }
        setGames(newGames);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <header>
        <h1>
          B<img src={image} alt="bola-logo" width={50} height={50} />
          la
        </h1>
      </header>
      {loggedIn ? (
        <div className="body-container">
          <div className="list-container">
            <GameList games={games} joinGame={joinGame} />
          </div>
          <div className="add-container">
            <GameAdd postGame={postGame} />
          </div>
          <div className="profile-container">
            <Profile user={user} />
          </div>
        </div>
      ) : (
        <div className="login-container">
          <SignIn logIn={logIn} />
        </div>
      )}
    </div>
  );
}

export default App;
