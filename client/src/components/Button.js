function Button({ user, game, joinGame, unJoinGame }) {
  function handleClickJoin() {
    joinGame(game, user);
  }

  function handleClickUnJoin() {
    unJoinGame(game, user);
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
      return <p className="game-full">Full</p>;
    }
  }

  return setButton();
}

export default Button;
