const Select = ({ onChangeBeach, onChangeLevel }) => {
  return (
    <>
      <div>
        <select onChange={onChangeLevel} className="form-select">
          <option defaultValue>Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
    </>
  );
};
export default Select;
