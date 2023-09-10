import React from "react";
import "./index.css";

function Cell() {
  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#e74c3c";
    e.target.style.color = "black";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "";
    e.target.style.color = "";
  };
  return (
    <td onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      X
    </td>
  );
}

export default Cell;
