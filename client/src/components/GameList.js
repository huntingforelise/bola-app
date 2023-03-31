import Game from "./Game";
import Select from "./Select";
import { useState } from "react";

function GameList({ games, joinGame, unJoinGame, user, allGames, users }) {
  const [selectLevelValue, setSelectLevelValue] = useState("");
  const [filterGames, setFilterGames] = useState([]);

  function onChangeLevel(event) {
    const value = event.target.value;
    setSelectLevelValue(value);
    filterByLevel(value);
  }

  const filterArray = [];

  function filterByLevel(levelValue) {
    for (const game of games) {
      if (game.level === levelValue) {
        filterArray.push(game);
      }
    }
    setFilterGames(filterArray);
  }

  return (
    <>
      {allGames ? (
        <>
          <h2>Upcoming Games</h2>
          <Select onChangeLevel={onChangeLevel} className="select-dropdown" />
        </>
      ) : (
        <h2>Your Games</h2>
      )}

      {games.length ? (
        <>
          <div id="games-list">
            {(selectLevelValue === "Select Level") | (selectLevelValue === "")
              ? games
                  .filter((a) => new Date(a.date) >= Date.now())
                  .sort((a, b) => new Date(a.date) - new Date(b.date))
                  .map((game) => (
                    <Game
                      game={game}
                      key={game._id}
                      joinGame={joinGame}
                      unJoinGame={unJoinGame}
                      user={user}
                      allGames={allGames}
                      users={users}
                    />
                  ))
              : filterGames
                  .filter((a) => new Date(a.date) >= Date.now())
                  .sort((a, b) => new Date(a.date) - new Date(b.date))
                  .map((game) => (
                    <Game
                      game={game}
                      key={game._id}
                      joinGame={joinGame}
                      unJoinGame={unJoinGame}
                      user={user}
                      allGames={allGames}
                      users={users}
                    />
                  ))}
          </div>
        </>
      ) : null}
    </>
  );
}

export default GameList;
