import { useState } from "react";

function Button({ user, game, joinGame }) {
  // const [gameStatus, setGameStatus] = useState({});

  function handleClick() {
    joinGame(game, user);
    // setGameStatus(game);
  }

  return user.gameslist.includes(game._id) ? (
    <p className="game-joined">Joined</p>
  ) : game.subscribedlist.length < game.maxplayers ? (
    <button className="game-incomplete" onClick={handleClick}>
      Join!
    </button>
  ) : (
    <p className="game-full">Full</p>
  );
}

export default Button;
