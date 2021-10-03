import React from "react";

export const Square = ({ value, onClick }) => {
  return (
    <button className={value ? "btn disabled" : "btn"} onClick={onClick}>
      {value}
    </button>
  );
};
