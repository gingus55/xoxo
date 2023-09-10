import React from "react";
import Cell from "../Cell/Cell";
import "./index.css";

function Row(columns) {
  return (
    <tr>
      <Cell />
      <Cell />
      <Cell />
    </tr>
  );
}

export default Row;
