import { useState } from "react";

function OrganiseGame({ postGame }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    postGame(formJson);
    setSubmitted(true);
    event.target.reset();
  }
  return (
    <>
      <h2>Organise a Game</h2>
      <div className="add-container">
        <div id="form">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="form-element">
              <label>
                Date and time
                <br />
                <input name="date" type="datetime-local" />
              </label>
            </div>
            <div className="form-element">
              <label>
                Beach
                <br />
                <select name="beach" required>
                  <option value="Praia da Luz">Praia da Luz</option>
                  <option value="Porto de Mos">Porto de Mos</option>
                  <option value="Meia Praia">Meia Praia</option>
                </select>
              </label>
            </div>
            <div className="form-element">
              <label>
                Maximum Players
                <br />
                <select name="maxplayers" required>
                  <option value="4">2x2</option>
                  <option value="6">3x3</option>
                  <option value="8">4x4</option>
                  <option value="10">5x5</option>
                </select>
              </label>
            </div>
            <div className="form-element">
              <label>
                Minimum Level
                <br />
                <select name="level" required>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </label>
            </div>
            <div className="form-element">
              <button name="button" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      {submitted ? <div className="game-on">Your game is ON!</div> : null}
    </>
  );
}

export default OrganiseGame;
