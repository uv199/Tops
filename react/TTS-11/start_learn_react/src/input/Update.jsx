import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./input.css";

export default function Update() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);
  let [ind, setInd] = useState(null);

  // to get input value
  function getData(e) {
    setName(e.target.value);
  }

  // to add input value to array
  function addData() {
    setArr([...arr, name]); // we use spred opr. for copy old arr and also add new ele
    setName("");
  }

  // to delete data from array
  function deleteHandler(index) {
    // with use of splice
    arr.splice(index, 1);
    setArr([...arr]);
  }

  function updateFun(index, data) {
    setName(data);
    setInd(index);
  }

  function updateChnage() {
    arr.splice(ind, 1, name);
    setArr([...arr]);
    setName("");
    setInd(null)
  }

  //to delete all data
  function deleteAll() {
    setArr([]);
  }

  return (
    <>
      <h1>Update</h1>
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
            onClick={() => updateChnage()}
            className="mt-2"
            variant="success"
          >
            Save Chnages
          </Button>
        </div>
        <Button
          className="mt-2 mb-2"
          onClick={() => deleteAll()}
          variant="danger"
        >
          Delete ALl
        </Button>
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
                      <Button
                        className="me-2"
                        variant="danger"
                        onClick={() => deleteHandler(i)}
                      >
                        Delete
                      </Button>
                      <Button variant="info" onClick={() => updateFun(i, e)}>
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
