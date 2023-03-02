import "./App.css";
import GameList from "./components/GameList";
import AddGame from "./components/AddGame";
import SignIn from "./components/SignIn";
import * as ApiClient from "./ApiClientService";
import { useState, useEffect } from "react";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    ApiClient.getGames()
      .then((games) => setGames(games))
      .catch((error) => console.log(error));
  }, []);

  function postGame(data) {
    ApiClient.postGame({
      date: data.date,
      beach: data.beach,
      maxplayers: data.maxplayers,
      level: data.level,
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
      <h1>Bola</h1>
      <div className="list-container">
        <GameList games={games} joinGame={joinGame} />
      </div>
      <div className="add-container">
        <AddGame postGame={postGame} />
      </div>
      <div className="login-container">
        <SignIn />
      </div>
    </div>
  );
}

export default App;
