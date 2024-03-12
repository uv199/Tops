import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Login() {
  let [user, setUser] = useState({ email: "", password: "" });
  return (
    <div style={{ marginTop: "50px" }}>
      <div
        className="d-flex justify-content-center rounded-2 "
        style={{ backgroundColor: "#FFE8E8" }}
      >
        <Form
          style={{ backgroundColor: "#ffff" }}
          className="p-4 pt-1 w-25 mt-5 mb-5 border rounded-2"
        >
          <h1 className="text-center">Login</h1>
          <hr />
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter Your Email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
          </FormGroup>

          <Button className="w-100" color="danger">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
