import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

export default function NewUpdate() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);
  let [ind, setIndex] = useState(null);

  function getName(e) {
    setName(e?.target?.value);
  }

  function addName(params) {
    setArr([...arr, name]); // add name in array and also copy old array
    setName(""); // for do input empty on click of add btn
  }

  // remove event
  function handleDelete(index) {
    // by splice
    arr.splice(index, 1);
    setArr([...arr]);
  }

  function handleUpdate(index, data) {
    setName(data);
    setIndex(index);
  }
  function updateInArray() {
    if (ind || ind === 0) {
      console.log("----->");
      arr.splice(ind, 1, name);
      setArr([...arr]);
      setName("");
      setIndex(null);
    } else {
      alert("please select sme data");
    }
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

        <Button onClick={() => addName()} variant="success">
          Add
        </Button>
        <Button
          className="ms-2"
          onClick={() => updateInArray()}
          variant="primary"
        >
          Update
        </Button>
      </Form>

      <div>
        <h1>{ind}</h1>
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
