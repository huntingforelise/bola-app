import Game from "./Game";

function GameList({ games, joinGame, user, joined }) {
  return games.length ? (
    <div id="games-list">
      {games
        .filter((a) => new Date(a.date) >= Date.now())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((game) => (
          <Game
            game={game}
            key={game._id}
            joinGame={joinGame}
            user={user}
            joined={joined}
          />
        ))}
    </div>
  ) : null;
}

export default GameList;
