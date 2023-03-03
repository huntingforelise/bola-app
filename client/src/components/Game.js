import moment from "moment";

function Game({ game, joinGame }) {
  function handleClick() {
    joinGame(game);
  }

  const day = moment(game.date).format("MMM D");
  const time = moment(game.date).format("MMMM Do h:mm a");

  return (
    <div className="game">
      <p id="game-day">{day}</p>
      <div className="game-container">
        <p id="game-time">{time}</p>
        <p id="game-beach">{game.beach}</p>
        <p id="game-players">
          {game.subscribedplayers} / {game.maxplayers}
        </p>
        <p id="game-level">{game.level}</p>
      </div>
      {game.subscribedplayers < game.maxplayers ? (
        <button className="game-incomplete" onClick={handleClick}>
          Join!
        </button>
      ) : (
        <p className="game-full">Full</p>
      )}
    </div>
  );
}

export default Game;
