import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function MultiRevise() {
  let [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
  });
  let [userArr, setUserArr] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("user", user);
    setUserArr([...userArr, user]);
  };
  console.log("userarr", userArr);
  return (
    <div>
      <h1>email: {user.email}</h1>
      <h1> pass : {user.password}</h1>
      <Form
        onSubmit={(e) => submitHandler(e)}
        className="mt-4 border p-3 rounded-3"
      >
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            // ...user because need to copy old data
            onChange={(e) => setUser({ ...user, name: e?.target?.value })}
            id="name"
            value={user.name}
            placeholder="Please enter name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            // ...user because need to copy old data
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
            id="email"
            value={user.email}
            placeholder="Please enter email"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
            id="password"
            placeholder="Please enter password"
            type="password"
          />
        </FormGroup>
        <Button Button color="danger" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
}
