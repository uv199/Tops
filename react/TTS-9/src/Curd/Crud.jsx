import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function Crud() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    city: "",
  });
  let [index, setIndex] = useState();
let[allUser, setAllUser] = useState ()
  return (
    <>
      <Form>
        <FormGroup>
          <Label>Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            value={email.user}
            placeholder="Enter your email"
            type="email"
            onChange
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            id="examplePassword"
            name="password"
            value={e.value.target}
            placeholder="Enter your password"
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Label>City</Label>
          <Input
            id="example"
            name="city"
            value={e.value.target}
            placeholder="Enter your city"
            type="Text"
            onChange
          />
        </FormGroup>
        <FormGroup>
          <Label>State</Label>
          <Input
            id="example"
            name="State"
            value={e.value}
            placeholder="Enter your State"
            type="Text"
            onchange
          />
        </FormGroup>
        <Table striped>
          <thead>
            <tr>
              <th>email</th>
              <th>password </th>
              <th> city</th>
              <th>state</th>
            </tr>
            {user.map}
          </thead>
        </Table>
        <Button>Submit</Button>
      </Form>
    </>
  );
}
