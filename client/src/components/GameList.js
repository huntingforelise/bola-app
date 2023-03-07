import Game from "./Game";
import Select from "./Select";
import { useState } from "react";

function GameList({ games, joinGame, unJoinGame, user, allGames, users }) {
  const [selectValue, setSelectValue] = useState("");
  const [filterGames, setFilterGames] = useState([]);
  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
    filterByBeach(value);
  };

  const filterArray = [];

  function filterByBeach(beachValue) {
    for (const game of games) {
      if (game.beach === beachValue) {
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
          <Select onChange={onChange} />
        </>
      ) : (
        <h2>Your Games</h2>
      )}

      {games.length ? (
        <>
          <div id="games-list">
            {(selectValue === "Select Beach") | (selectValue === "")
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
