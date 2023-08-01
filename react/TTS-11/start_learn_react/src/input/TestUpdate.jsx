import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./input.css";
import { castArray } from "lodash";

export default function TestUpdate() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);
  let [ind, setInd] = useState(null);

  // to get input value
  function getData(e) {
    setName(e.target.value);
  }

  // to add input value to array
  function addData() {
    setArr([...arr, name]);
    setName("");
  }

  function update(index, data) {
    setName(data); // to desplay data in input
    setInd(index); // for use index in updateInArray method
  }

  function updateInArray() {
    if (ind || ind === 0) {
      arr.splice(ind, 1, name); // remove old ele and add new ele in array
      setArr([...arr]); // set new array
      setName(""); // to blank input
      setInd(null); // to set null
    } else {
      alert("Select any record");
    }
  }

  return (
    <>
      <h1>Test Update</h1>
      <div className="inputDiv">
        <label htmlFor="name">Name : </label>
        <input
          onChange={(e) => getData(e)}
          type="text"
          value={name} // to blank value of input
          id="name"
          placeholder="Please enter your name"
        />
        <div className="d-inline">
          <Button
            className="mt-2 me-3"
            onClick={() => addData()}
            variant="primary"
          >
            Add Name
          </Button>
          <Button
            onClick={() => updateInArray()}
            className="mt-2"
            variant="success"
          >
            Save Chnages
          </Button>
        </div>

        {arr.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e}</td>
                    <td>
                      <Button variant="info" onClick={() => update(i, e)}>
                        update
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : null}
      </div>
    </>
  );
}
