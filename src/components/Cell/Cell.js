import React, { useState } from "react";
import "./index.css";

function Cell({ loc }) {
  const coord = [loc.data, loc.i];
  const [value, setValue] = useState(" ");
  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#e74c3c";
    e.target.style.color = "black";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "";
    e.target.style.color = "";
  };

  const handleClick = (e) => {
    setValue("X");
  };
  return (
    <td
      data-loc={coord}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {value}
    </td>
  );
}

export default Cell;
