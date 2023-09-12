import React from "react";
import Cell from "../Cell/Cell";
import "./index.css";

function Row({ data, columns }) {
  const columnsArray = [];

  for (let i = 0; i < columns; i++) {
    columnsArray.push(<Cell loc={{ data, i }} key={i} />);
  }
  return <tr>{columnsArray}</tr>;
}

export default Row;
