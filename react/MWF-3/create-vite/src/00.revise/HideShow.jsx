import React, { useState } from "react";

function TableComponent() {
  const [selectedCellData, setSelectedCellData] = useState(null);

  // Sample data for the table
  const tableData = [
    {
      city: "Delhi",
      state_name: "Delhi",
      population: "32226000",
    },
    {
      city: "Mumbai",
      state_name: "Mahārāshtra",
      population: "32226000",
    },
    {
      city: "Kolkāta",
      state_name: "West Bengal",
      population: "18502000",
    },
    {
      city: "Bangalore",
      state_name: "Karnātaka",
      population: "15386000",
    },
    {
      city: "Chennai",
      state_name: "Tamil Nādu",
      population: "12395000",
    },
  ];

  // Function to handle the button click
  const handleButtonClick = (cellData) => {
    setSelectedCellData(cellData); // Set the selected cell data to be displayed
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((e, index) => (
            <tr key={index}>
              <td>{e.city}</td>
              <td>{e.state_name}</td>
              <td>
                {selectedCellData === e.population ? (
                  <div>
                    {e.population}
                    <button onClick={() => handleButtonClick(e.population)}>
                      Show Data
                    </button>
                  </div>
                ) : (
                  <button onClick={() => handleButtonClick(e.population)}>
                    Show Data
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
