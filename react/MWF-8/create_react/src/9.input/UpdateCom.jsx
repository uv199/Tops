import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

export default function UpdateCom() {
  let [firstName, setFirstName] = useState("");
  let [data, setData] = useState([]);
  let [isUpdate, setIsUpdate] = useState(false);
  let [index, setIndex] = useState(null);

  //to get data from input
  function getData(e) {
    setFirstName(e?.target?.value);
  }

  // to add data in array
  function addData() {
    if (isUpdate) {
      data.splice(index, 1, firstName);
      setData([...data]);
      setFirstName("");
      setIsUpdate(false);
    } else {
      setData([...data, firstName]);
      setFirstName("");
    }
  }

  // to remove data from array (delete)
  function deleteHandler(index) {
    data.splice(index, 1);
    setData([...data]);
  }

  // update
  function updateHandler(ele, index) {
    setIsUpdate(true);
    setFirstName(ele);
    setIndex(index);
  }
  return (
    <>
      <h1>Update Event</h1>
      <label htmlFor="fn">First Name : </label>
      <Form.Control
        className="w-25"
        size="sm"
        type="text"
        value={firstName}
        onChange={(e) => getData(e)}
        placeholder="Large text"
      />
      <Button className="mt-2" onClick={() => addData()} variant="primary">
        {isUpdate ? "Update" : "Add Name"}
      </Button>
      <h1>{firstName}</h1>
      <div>
        {data.length > 0 ? (
          <Table className="mt-5" striped bordered hover>
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e}</td>
                    <td>
                      <Button variant="danger" onClick={() => deleteHandler(i)}>
                        Delete
                      </Button>
                      <Button
                        className="ms-2"
                        variant="info"
                        onClick={() => updateHandler(e, i)}
                      >
                        Update
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <h1>Data Not Found......!</h1>
        )}
      </div>
    </>
  );
}
