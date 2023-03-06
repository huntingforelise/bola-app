import moment from "moment";
import Button from "./Button.js";

function Game({ game, joinGame, unJoinGame, user, allGames }) {
  const day = moment(game.date).format("MMM D");
  const time = moment(game.date).format("h:mm a");

  return (
    <>
      <div className="game">
        <p className="game-day">{day}</p>
        <p className="game-time">{time}</p>
        <p className="game-beach">{game.beach}</p>
        <p className="game-players">
          {game.subscribedlist.length} / {game.maxplayers}
        </p>
        <p className="game-level">{game.level}</p>

        {allGames ? (
          <Button
            user={user}
            game={game}
            joinGame={joinGame}
            unJoinGame={unJoinGame}
          />
        ) : null}
      </div>
    </>
  );
}
export default Game;
