import "./App.css";
import SignIn from "./components/SignIn";
import GameList from "./components/GameList";
import OrganiseGame from "./components/OrganiseGame";
import Account from "./components/Account";
import * as ApiClient from "./ApiClientService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import image from "./assets/BusinessCard.JPG";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [games, setGames] = useState([]);
  const [joinedGames, setJoinedGames] = useState([]);
  const navigate = useNavigate();

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

  const filterGames = (arr) => {
    const myGames = [];
    for (const game of arr) {
      for (const id of game.subscribedlist) {
        if (id === user._id) {
          myGames.push(game);
        }
      }
    }
    return myGames;
  };

  useEffect(() => {
    ApiClient.getGames()
      .then((games) => {
        setGames(games);
        if (loggedIn) {
          const filteredGames = filterGames(games);
          setJoinedGames(filteredGames);
        }
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [user]);

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

  function joinGame(fullGameObject, userObject) {
    ApiClient.joinGame(fullGameObject, userObject)
      .then((updatedGame) => {
        const newGames = [...games];
        for (const newGame of newGames) {
          if (newGame._id === updatedGame._id) {
            const updatedPlayers = updatedGame.subscribedlist;
            newGame.subscribedlist = updatedPlayers;
          }
        }
        setGames(newGames);
        setUser((prev) => {
          const user = { ...prev, gameslist: [...prev.gameslist] };
          user.gameslist.push(updatedGame._id);
          return user;
        });

        // const gameID = updatedGame._id;
        // if (!userObject.gameslist.includes(gameID)) {
        //   setJoinedGames([...joinedGames, updatedGame]);
        // }
      })
      .catch((error) => console.log(error));
  }

  function unJoinGame(fullGameObject, userObject) {
    ApiClient.unJoinGame(fullGameObject, userObject)
      .then((updatedGame) => {
        const newGames = [...games];
        for (const newGame of newGames) {
          if (newGame._id === updatedGame._id) {
            const updatedPlayers = updatedGame.subscribedlist;
            newGame.subscribedlist = updatedPlayers;
          }
        }
        setGames(newGames);
        setUser((prev) => {
          const user = { ...prev, gameslist: [...prev.gameslist] };
          const index = user.gameslist.indexOf(updatedGame._id);
          user.gameslist.splice(index, 1);
          return user;
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <header>
        <img src={image} alt="Bola" />
      </header>
      {loggedIn ? (
        <>
          <div className="body-container">
            <Routes>
              <Route
                path="/"
                element={
                  <GameList
                    games={games}
                    joinGame={joinGame}
                    unJoinGame={unJoinGame}
                    user={user}
                    allGames={true}
                  />
                }
              />
              <Route
                path="/gamelist"
                element={
                  <GameList
                    games={games}
                    joinGame={joinGame}
                    unJoinGame={unJoinGame}
                    user={user}
                    allGames={true}
                  />
                }
              />
              <Route
                path="/organise"
                element={<OrganiseGame postGame={postGame} user={user} />}
              />
              <Route
                path="/mygames"
                element={
                  <GameList games={joinedGames} user={user} allGames={false} />
                }
              />
              <Route path="/account" element={<Account user={user} />} />
            </Routes>
          </div>

          <Box
            sx={{
              width: "100vw",
              position: "fixed",
              bottom: 0,
            }}
          >
            <BottomNavigation showLabels style={{ backgroundColor: "#dbd4af" }}>
              <BottomNavigationAction
                label="Upcoming"
                icon={<FormatListBulletedOutlinedIcon />}
                onClick={() => navigate("/gamelist")}
              />
              <BottomNavigationAction
                label="Organise"
                icon={<AddCircleOutlineOutlinedIcon />}
                onClick={() => navigate("/organise")}
              />
              <BottomNavigationAction
                label="Attending"
                icon={<FavoriteIcon />}
                onClick={() => navigate("/mygames")}
              />
              <BottomNavigationAction
                label="Account"
                icon={<AccountCircleOutlinedIcon />}
                onClick={() => navigate("/account")}
              />
            </BottomNavigation>
          </Box>
        </>
      ) : (
        <div className="body-container">
          <SignIn logIn={logIn} />
        </div>
      )}
    </div>
  );
}

export default App;
