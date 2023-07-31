import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

export default function UpdateCom() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);
  let [isNew, setIsNew] = useState(true);
  let [ind, setInd] = useState(null); // we have to give null because 0 is already available in array as index

  function getName(e) {
    setName(e?.target?.value);
  }

  function addName(params) {
    setArr([...arr, name]); // add name in array and also copy old array
    setName(""); // for do input empty on click of add btn
  }

  function updateData() {
    console.log("----", ind, name);
    arr.splice(ind, 1, name);
    setArr([...arr]);
    setName("");
    setIsNew(true);
  }

  // remove event
  function handleDelete(index) {
    // by splice
    arr.splice(index, 1);
    setArr([...arr]);
  }

  // for update
  function handleUpdate(index, data) {
    console.log("====>", index, data);
    setName(data);
    setIsNew(false);
    setInd(index);
  }
  return (
    <>
      <Form className="border border-dark p-4 rounded mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Sonu Patel"
            onChange={(e) => getName(e)}
            value={name}
          />
        </Form.Group>
        {isNew ? (
          <Button onClick={() => addName()} variant="success">
            Add
          </Button>
        ) : (
          <Button onClick={() => updateData()} variant="primary">
            Update
          </Button>
        )}
      </Form>

      <div>
        {arr.length > 0 ? (
          <>
            <h1> Data Table</h1>
            <Table className="  mt-4" striped bordered hover>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {arr.map((e, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e}</td>
                    <td>
                      <Button onClick={() => handleDelete()} variant="danger">
                        Delete
                      </Button>
                      <Button
                        onClick={() => handleUpdate(i, e)}
                        className="ms-4"
                        variant="primary"
                      >
                        Update
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        ) : (
          <h1>Data Not Available....!</h1>
        )}
      </div>
    </>
  );
}
