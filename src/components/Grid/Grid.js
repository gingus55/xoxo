import React from "react";
import "./index.css";
import Row from "../Row/Row";

function Grid(rows, columns) {
  return (
    <div id="holder">
      <table>
        <tbody>
          <Row />
          <Row />
          <Row />
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
