import React from "react";
import Cell from "../Cell/Cell";
import "./index.css";

function Row(columns) {
  console.log(columns);
  const columnsArray = [];

  for (let i = 0; i < columns.columns; i++) {
    columnsArray.push(<Cell key={i} />);
  }
  return <tr>{columnsArray}</tr>;
}

export default Row;
