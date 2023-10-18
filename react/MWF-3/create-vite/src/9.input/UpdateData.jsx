import { FileSignature } from "lucide-react";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function UpdateData() {
  let [name, setName] = useState("");
  let [userArr, setUserArr] = useState([]);
  let [index, setIndex] = useState(null);
  let [updateMode, setUpdateMode] = useState(false);

  const getData = (element) => {
    setName(element.target.value);
  };

  // add data to array
  const addDataToArr = () => {
    setUserArr([...userArr, name]);
    setName("");
  };

  // UPDATE
  // setpe-1 take data froim row ansd set it into form
  function updateHandler(data, index) {
    setIndex(index);
    setName(data);
    setUpdateMode(true);
  }

  function updateDataToArray() {
    // splice method
    // new data - name state
    // array - userArr state
    // index - index state
    if (index || index === 0) {
      // null-undefined-false-0
      userArr.splice(index, 1, name);
      setUserArr([...userArr]);
      setName("");
      setIndex(null);
      setUpdateMode(false);
    }
  }

  return (
    <>
      <h1>Email is {name}</h1>
      <Form className="border p-3 border-dark rounded-3">
        <FormGroup>
          <Label for="name">Email</Label>
          <Input
            value={name}
            id="name"
            name="name"
            placeholder="Enter your name"
            type="text"
            onChange={(e) => getData(e)}
          />
        </FormGroup>
        {/* {index || index === 0 ? ( */}
        {updateMode ? (
          <Button
            onClick={() => updateDataToArray()}
            color="danger"
            className="w-100"
          >
            Update
          </Button>
        ) : (
          <Button
            onClick={() => addDataToArr()}
            color="danger"
            className="w-100"
          >
            Submit
          </Button>
        )}
      </Form>

      <Table className="w-50" striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>NAME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {userArr.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e}</td>
                <td>
                  <FileSignature
                    role="button"
                    onClick={() => updateHandler(e, i)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
