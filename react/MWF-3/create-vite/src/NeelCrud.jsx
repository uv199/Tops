import { FileSignature, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function FullCrud() {
  let [name, setName] = useState("");
  let [userArr, setUserArr] = useState([]);
  let [index, setIndex] = useState(null);
  let [updateMode, setUpdateMode] = useState(false);

  // add data to array
  const addDataToArr = () => {
    setUserArr([...userArr, name]);
    setName("");
    localStorage.setItem("userData", JSON.stringify([...userArr, name]));
  };

  // Update
  function updateHandler(data, index) {
    setIndex(index);
    setName(data);
    setUpdateMode(true);
  }

  function updateDataToArray() {
    if (index || index === 0) {
      userArr.splice(index, 1, name);
      setUserArr([...userArr]);
      setName("");
      setIndex(null);
      setUpdateMode(false);
      localStorage.setItem("userData", JSON.stringify([...userArr]));
    }
  }

  // DELETE
  const deleteHandler = (index) => {
    let filterdData = userArr.filter((e, i) => i !== index);
    setUserArr(filterdData);
    localStorage.setItem("userData", JSON.stringify(filterdData));
  };

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
            onChange={(e) => setName(e.target.value)}
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
      {/* <Button color="danger">Delete All</Button> */}
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
                  <Trash2
                    color="#e71818"
                    role="button"
                    onClick={() => deleteHandler(i)}
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
