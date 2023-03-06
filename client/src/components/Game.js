import moment from "moment";
import Button from "./Button.js";

function Game({ game, joinGame, unJoinGame, user, allGames, users }) {
  const day = moment(game.date).format("MMM D");
  const time = moment(game.date).format("h:mm A");

  const playersArray = [];

  if (users) {
    const players = game.subscribedlist;
    for (const player of players) {
      for (const userel of users) {
        if (player === userel._id) {
          playersArray.push(userel.username);
        }
      }
    }
  }

  return (
    <>
      {allGames ? (
        <>
          <div className="game">
            <p className="game-day">{day}</p>
            <p className="game-time">{time}</p>
            <p className="game-beach">{game.beach}</p>
            <p className="game-players">
              {game.subscribedlist.length} / {game.maxplayers}
            </p>
            <p className="game-level">{game.level}</p>
            <Button
              user={user}
              game={game}
              joinGame={joinGame}
              unJoinGame={unJoinGame}
            />
          </div>
        </>
      ) : (
        <>
          <div className="game">
            <p className="game-day">
              {game.level} game on {day} at {time} at {game.beach}
            </p>
            <p>
              Other players joining this game:
              {playersArray.map((player, index) => (
                <li key={index}>{player}</li>
              ))}
            </p>
            <p className="game-players">
              Spots remaining: {game.maxplayers - game.subscribedlist.length} /
              {game.maxplayers}
            </p>
          </div>
        </>
      )}
    </>
  );
}
export default Game;
