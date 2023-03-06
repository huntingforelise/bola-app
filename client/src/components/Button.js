// import { useState } from "react";

function Button({ user, game, joinGame, unJoinGame }) {
  // const [agame, setAGame] = useState(game);

  function handleClickJoin() {
    joinGame(game, user);
  }

  function handleClickUnJoin() {
    unJoinGame(game, user);
    // setAGame({});
  }

  function setButton() {
    if (game.subscribedlist.includes(user._id)) {
      return (
        <>
          <button className="game-button" onClick={handleClickUnJoin}>
            Unjoin
          </button>
        </>
      );
    } else if (game.subscribedlist.length < game.maxplayers) {
      return (
        <button className="game-button" onClick={handleClickJoin}>
          Join!
        </button>
      );
    } else {
      return <div className="game-full">FULL</div>;
    }
  }

  return setButton();
}

export default Button;
