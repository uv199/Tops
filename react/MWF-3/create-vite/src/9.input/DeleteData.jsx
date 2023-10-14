import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function DeleteData() {
  let [email, setEmail] = useState("");
  let [userArr, setUserArr] = useState([]);

  // add data to array
  const addDataToArr = () => {
    setUserArr([...userArr, email]);
    setEmail("");
  };

  const deleteHandler = (index) => {
    // filter
    let filterdData = userArr.filter((e, i) => i !== index);
    console.log("filterdData", filterdData);
    setUserArr(filterdData);

    //splice
    // userArr.splice(index, 1);
    // setUserArr([...userArr]);
  };

  return (
    <>
      <h1>User From</h1>
      <Form className="border p-3 border-dark rounded-3">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={email}
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <Button onClick={() => addDataToArr()} color="danger" className="w-100">
          Submit
        </Button>
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
