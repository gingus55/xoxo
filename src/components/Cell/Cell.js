import React, { useState } from "react";
import "./index.css";
import checkWin from "../../hooks/gameStatus";

function Cell({ loc }) {
  const coord = [loc.data, loc.i];
  const [value, setValue] = useState(" ");
  //   const [clickedArray, setClickedArray] = useState([]);

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
    // setClickedArray([...clickedArray, e.target.getAttribute("data-loc")]);

    // console.log(e.target.getAttribute("data-loc"));
    checkWin(e.target.getAttribute("data-loc"));
    // console.log(clickedArray);
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
