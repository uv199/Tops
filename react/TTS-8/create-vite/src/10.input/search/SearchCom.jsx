import React, { useEffect, useState } from "react";
import Data from "../../../../../../JS-assignment/data.json";
import { Table } from "reactstrap";

export default function SearchCom() {
  let [stateData, setStateData] = useState(Data);
  let [searchTxt, setSearchTxt] = useState("");
  useEffect(() => {
    let newdata = Data.filter((e) =>
      e.city.toLowerCase().includes(searchTxt.toLowerCase()) || e.state_name.toLowerCase().includes(searchTxt.toLowerCase())
    );
    setStateData(newdata);
  }, [searchTxt]);
  return (
    <>
      <input type="text" onChange={(e) => setSearchTxt(e?.target?.value)} />
      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>City</th>
            <th>State</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {stateData.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.city}</td>
                <td>{e.state_name}</td>
                <td>{e.population}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {}
    </>
  );
}
