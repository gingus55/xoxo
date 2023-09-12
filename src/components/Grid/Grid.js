import React from "react";
import "./index.css";
import Row from "../Row/Row";

function Grid({ rows, columns }) {
  console.log(rows.selectedRows, columns);
  const rowsArray = [];
  for (let i = 0; i < rows.selectedRows; i++) {
    rowsArray.push(<Row key={i} columns={columns.selectedColumns} />);
  }

  return (
    <div id="holder">
      <table>
        <tbody>{rowsArray}</tbody>
      </table>
    </div>
  );
}

export default Grid;
