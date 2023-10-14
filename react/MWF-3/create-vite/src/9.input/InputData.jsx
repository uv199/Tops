import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function InputData() {
  let [email, setEmail] = useState("");
  let [userArr, setUserArr] = useState([]);
  let [password, setPassword] = useState("");

  const getData = (element) => {
    setEmail(element.target.value);
  };

  // add data to array
  const addDataToArr = () => {
    setUserArr([...userArr, email]);
    setEmail("");
  };
  return (
    <>
      <h1>Email is {email}</h1>
      <h1>password is {password}</h1>
      <Form className="border p-3 border-dark rounded-3">
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            value={email}
            id="email"
            name="email"
            placeholder="Enter your email"
            type="text"
            onChange={(e) => getData(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            onChange={(e) => setPassword(e?.target?.value)}
            placeholder="Enter your password"
            type="password"
          />
        </FormGroup>
        <Button onClick={() => addDataToArr()} color="danger" className="w-100">
          Submit
        </Button>
      </Form>
      {userArr.map((e, i) => {
        return <h1 key={i}>My name is {e}</h1>;
      })}
    </>
  );
}
