import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Welcome() {
  const [selectedRows, setSelectedRows] = useState("3");
  const [selectedColumns, setSelectedColumns] = useState("3");

  const handleRowsChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setSelectedRows(event.target.value);
    console.log(selectedRows);
  };

  const handleColumnsChange = (event) => {
    setSelectedColumns(event.target.value);
  };

  return (
    <>
      <div className="container">
        Lets try and get a grid set up..
        <>
          <h3>Rows</h3>
          <select id="rows" value={selectedRows} onChange={handleRowsChange}>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </>
        <>
          <h3>Columns</h3>
          <select
            id="columns"
            value={selectedColumns}
            onChange={handleColumnsChange}
          >
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </>
        <Link
          to="/game"
          state={{ rows: { selectedRows }, columns: { selectedColumns } }}
        >
          Go to Game
        </Link>
      </div>
    </>
  );
}

export default Welcome;
