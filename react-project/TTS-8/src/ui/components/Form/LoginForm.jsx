import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

export default function LoginForm() {
  return (
    <div>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input />
      </FormGroup>
    </div>
  );
}
