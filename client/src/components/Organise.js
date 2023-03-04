function Organise({ postGame, user }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    postGame(formJson);
  }
  return (
    <>
      <h2>Organise a game</h2>
      <div id="form">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-element">
            <label>
              Date and time
              <input name="date" type="datetime-local" />
            </label>
          </div>
          <div className="form-element">
            <label>
              Beach
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
    </>
  );
}

export default Organise;
