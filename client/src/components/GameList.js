import Game from "./Game";

function GameList({ games, joinGame, unJoinGame, user, allGames, users }) {
  return (
    <>
      {allGames ? <h2>Upcoming Games</h2> : <h2>Your Games</h2>}

      {games.length ? (
        <div id="games-list">
          {games
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
      ) : null}
    </>
  );
}

export default GameList;
