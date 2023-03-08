import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Button({ user, game, joinGame, unJoinGame }) {
  const notify = () =>
    toast(
      "Sorry, you are not experienced enough for this game. Keep practising, you'll get there in no time!"
    );
  function handleClickJoin() {
    console.log(game.level);
    console.log(user.level);
    if (
      game.level === "Beginner" ||
      (game.level === "Intermediate" &&
        (user.level === "intermediate" || user.level === "advanced")) ||
      (game.level === "Advanced" && user.level === "advanced")
    ) {
      joinGame(game, user);
    } else {
      notify();
    }
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
        <div>
          <button
            className="game-button"
            onClick={() => {
              handleClickJoin();
            }}
          >
            Join!
          </button>
          <ToastContainer />
        </div>
      );
    } else {
      return <div className="game-full">FULL</div>;
    }
  }

  return setButton();
}

export default Button;
