import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

export default function UpdateTest() {
  let [firstName, setFirstName] = useState("");
  let [data, setData] = useState([]);
  let [ind, setInd] = useState(null);

  //to get data from input
  function getData(e) {
    setFirstName(e?.target?.value);
  }

  // to add data in array
  function addData() {
    if (firstName) {
      setData([...data, firstName]);
      setFirstName("");
    } else {
      alert("please add somthing in input");
    }
  }

  function updateArray(params) {
    if (ind || ind === 0) {
      // ind == ind null/false/0/undefined na hovu joiye
      data.splice(ind, 1, firstName);
      setData([...data]);
      setFirstName("");
      setInd(null);
    } else {
      alert("Please select any name");
    }
  }

  // update
  function updateHandler(index, data) {
    console.log("-----", index, data);
    setFirstName(data);
    setInd(index);
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
      <Button className="mt-2" onClick={() => addData()} variant="success">
        Add Name
      </Button>
      <Button onClick={() => updateArray()} className="mt-2" variant="primary">
        Save Chnage
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
                      {" "}
                      <Button
                        className="mt-2"
                        variant="info"
                        onClick={() => updateHandler(i, e)}
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
