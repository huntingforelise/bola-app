// import { useState } from "react";

const Select = ({ onChange }) => {
  // const [selectValue, setSelectValue] = useState("");
  // const onChange = (event) => {
  //   const value = event.target.value;
  //   setSelectValue(value);
  //   console.log(value);
  // };
  return (
    <div>
      <select onChange={onChange} className="form-select">
        <option defaultValue>Select Beach</option>
        <option value="Praia da Luz">Praia da Luz</option>
        <option value="Porto de Mos">Porto de Mos</option>
        <option value="Meia Praia">Meia Praia</option>
      </select>
    </div>
  );
};
export default Select;
