function Game({ game, joinGame }) {
  function handleClick() {
    joinGame(game);
  }

  return (
    <div className="game">
      <p id="game-date">{game.date}</p>
      <p id="game-beach">{game.beach}</p>
      <p id="game-players">
        {game.subscribedplayers} / {game.maxplayers}
      </p>
      <p id="game-level">{game.level}</p>
      {game.subscribedplayers < game.maxplayers ? (
        <button className="game-incomplete" onClick={handleClick}>
          Join this game!
        </button>
      ) : (
        <p className="game-full">
          This game is full, fancy organizing another one...?!
        </p>
      )}
    </div>
  );
}

export default Game;
