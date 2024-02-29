import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const initialUser = {
  name: "",
  email: "",
  number: "",
  password: "",
  age: "",
};
const initialAddress = {
  add: "",
  city: "",
  state: "",
  pinCode: "",
};

export default function SignUp() {
  let [user, setUser] = useState(initialUser);
  let [address, setAddress] = useState(initialAddress);

  return (
    <div className="d-flex flex-column align-items-center p-4">
      <h1>User Register Form</h1>
      <hr style={{ width: "50%" }} />
      <Form className="w-50 border p-4 rounded-2">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={user?.name}
            onChange={(e) => setUser({ ...user, name: e?.target?.value })}
            type="text"
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            value={user?.email}
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="number">Number</Label>
          <Input
            id="number"
            placeholder="Enter your number"
            value={user?.number}
            onChange={(e) => setUser({ ...user, number: e?.target?.value })}
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            id="age"
            placeholder="Enter your age"
            value={user?.age}
            onChange={(e) => setUser({ ...user, age: e?.target?.value })}
            type="number"
          />
        </FormGroup>

        <FormGroup>
          <Label for="add">Add-1</Label>
          <Input
            placeholder="Enter your age"
            id="add"
            name="text"
            onChange={(e) => setAddress({ ...user, add: e?.target?.value })}
            type="textarea"
          />
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Male</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" /> <Label check>Female</Label>
          </FormGroup>
          <FormGroup check disabled>
            <Input disabled name="radio1" type="radio" />{" "}
            <Label check>Option three is disabled</Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" /> <Label check>Check me out</Label>
        </FormGroup>
        <Button color="danger" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
}
