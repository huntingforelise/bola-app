import moment from "moment";
import Button from "./Button.js";

function Game({ game, joinGame, user, allGames }) {
  const day = moment(game.date).format("MMM D");
  const time = moment(game.date).format("h:mm a");

  return (
    <>
      <div className="game">
        <p id="game-day">{day}</p>
        <p id="game-dayTime">{time}</p>
        <p id="game-beach">{game.beach}</p>
        <p id="game-players">
          {game.subscribedlist.length} / {game.maxplayers}
        </p>
        <p id="game-level">{game.level}</p>

        {allGames ? (
          <Button user={user} game={game} joinGame={joinGame} />
        ) : null}
      </div>
    </>
  );
}
export default Game;
