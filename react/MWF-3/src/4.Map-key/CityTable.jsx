import React from "react";
import DATA from "../../../../JS-assignment/data.json";
import { Table } from "reactstrap";
let d = [];
export default function CityTable() {
  return (
    <>
      <h1>CITY DATA TABLE</h1>
      <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>CITY</th>
            <th>STATE</th>
            <th>POPULATION</th>
          </tr>
        </thead>
        <tbody>
          {d.map((e, i) => {
            return (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{e?.city}</td>
                <td>{e?.state_name}</td>
                <td>{e?.population}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
