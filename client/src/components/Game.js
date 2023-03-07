import moment from "moment";
import Button from "./Button.js";

function Game({ game, joinGame, unJoinGame, user, allGames, users }) {
  const day = moment(game.date).format("MMM D");
  const dayLong = moment(game.date).format("MMMM D");
  const time = moment(game.date).format("h:mm A");

  const playersArray = [];

  if (users) {
    const players = game.subscribedlist;
    for (const player of players) {
      for (const userel of users) {
        if (player === userel._id && player !== user._id) {
          playersArray.push(userel.firstname);
        }
      }
    }
  }

  return (
    <>
      {allGames ? (
        <>
          <div className="game">
            <div className="game-day">{day}</div>
            <div className="game-time">{time}</div>
            <div className="game-beach">{game.beach}</div>
            <div className="game-spots">
              Free spots: {game.maxplayers - game.subscribedlist.length}
            </div>
            <div className="game-type">
              {game.maxplayers / 2} v {game.maxplayers / 2}
            </div>
            <div className="game-level">{game.level}</div>
            <div>
              <Button
                user={user}
                game={game}
                joinGame={joinGame}
                unJoinGame={unJoinGame}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="game your-game">
            <div className="your-game-header">
              {dayLong}, {time} at {game.beach}
            </div>
            <div className="your-game-details">
              {game.maxplayers / 2} v {game.maxplayers / 2} {game.level} Game
            </div>
            {playersArray.length ? (
              <div className="your-game-coplayers">
                You are playing with:
                {playersArray.map((player, index) => (
                  <li key={index}>{player}</li>
                ))}
              </div>
            ) : (
              <div>
                It's just you at the moment! Fancy inviting some friends?
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
export default Game;
