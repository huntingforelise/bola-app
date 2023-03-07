import "./App.css";
import SignIn from "./components/SignIn";
import GameList from "./components/GameList";
import OrganiseGame from "./components/OrganiseGame";
import Account from "./components/Account";
import * as ApiClient from "./ApiClientService";
import { filterGames } from "./Helpers";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import image from "./assets/Logo2.JPG";
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
  const [users, setUsers] = useState([]);
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

  useEffect(() => {
    ApiClient.getGames()
      .then((games) => {
        setGames(games);
        if (loggedIn) {
          const filteredGames = filterGames(games, user);
          setJoinedGames(filteredGames);
        }
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    ApiClient.getUsers()
      .then((users) => {
        setUsers(users);
      })
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
        //added
        // const filteredGames = filterGames(games, user);
        // setJoinedGames(filteredGames);
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
                  <GameList
                    games={joinedGames}
                    user={user}
                    allGames={false}
                    users={users}
                  />
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
            <BottomNavigation
              // className="bottom-nav"
              showLabels
              style={{ backgroundColor: "#74affc", opacity: 0.8 }}
            >
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
