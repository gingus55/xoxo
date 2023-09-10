import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Welcome() {
  const [selectedRows, setSelectedRows] = useState("1");
  const [selectedColumns, setSelectedColumns] = useState("1");

  const handleRowsChange = (event) => {
    setSelectedRows(event.target.value);
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
            <option value="1">3</option>
            <option value="2">4</option>
            <option value="3">5</option>
            <option value="4">6</option>
          </select>
        </>
        <>
          <h3>Columns</h3>
          <select
            id="columns"
            value={selectedColumns}
            onChange={handleColumnsChange}
          >
            <option value="1">3</option>
            <option value="2">4</option>
            <option value="3">5</option>
            <option value="4">6</option>
          </select>
        </>
        <Link
          to={{
            pathname: "/game",
            state: {
              rows: selectedRows,
              columns: selectedColumns,
            },
          }}
        >
          Go to Game
        </Link>
      </div>
    </>
  );
}

export default Welcome;
