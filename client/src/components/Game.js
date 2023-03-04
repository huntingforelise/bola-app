import moment from "moment";
import { useState } from "react";

function Game({ game, joinGame, user, joined }) {
  // const [updated, setUpdated] = useState(false);
  // console.log(joined);
  function handleClick() {
    joinGame(game, user);
    // setUpdated(true);
  }

  // const day = moment(game.date).format("MMM D");
  const time = moment(game.date).format("MMMM Do h:mm a");

  return (
    <div className="game">
      {/* <p id="game-day">{day}</p> */}
      <div className="game-container">
        <p id="game-time">{time}</p>
        <p id="game-beach">{game.beach}</p>
        <p id="game-players">
          {game.subscribedlist.length} / {game.maxplayers}
        </p>
        <p id="game-level">{game.level}</p>
      </div>
      {joined ? (
        //|| updated
        "Joined!"
      ) : game.subscribedlist.length < game.maxplayers ? (
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
