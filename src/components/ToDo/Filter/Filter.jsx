import React from "react";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      {" "}
      Finde task
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
