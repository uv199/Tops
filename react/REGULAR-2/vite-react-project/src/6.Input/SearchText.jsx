import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

export default function SearchText() {
  let [name, setName] = useState("");
  let [arr, setArr] = useState([]);
  let [filterArr, setFiltereArr] = useState([...arr]);

  useEffect(() => {
    setFiltereArr([...arr]);
    // to update display array when we add some value in storage array
  }, [arr]);

  function getName(e) {
    setName(e?.target?.value);
  }

  function addName(params) {
    setArr([...arr, name]);
    setName("");
  }
  function searchData(e) {
    if (e?.target?.value?.length > 0) {
      let data = arr.filter((ele) => {
        return ele.includes(e.target.value);
      });
      setFiltereArr([...data]);
    } else {
      setFiltereArr([...arr]);
    }
  }

  return (
    <>
      <div className="w-50  p-2">
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
        </Form>

        <Form.Control
          type="text"
          placeholder="Search Text...!"
          onChange={(e) => searchData(e)}
        />

        {/* <Button className="mt-4" onClick={() => searchData()} variant="success">
          search
        </Button> */}

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
                {filterArr.map((e, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e}</td>
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
