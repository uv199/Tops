import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function Radio() {
  let [gender, setGender] = useState("male");

  return (
    <div className="d-flex justify-content-center">
        <h1>gender : {gender}</h1>
      <Form className="border border-dark p-3 rounded-2">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Input
            checked={gender === "male"}
            type="radio"
            onChange={() => setGender("male")}
          />
          <Label check>Male</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={gender === "female"}
            type="radio"
            onChange={() => setGender("female")}
          />
          <Label check>female</Label>
        </FormGroup>
        <FormGroup check>
          <Input
            checked={gender === "child"}
            type="radio"
            onChange={() => setGender("child")}
          />
          <Label check>Child</Label>
        </FormGroup>
      </Form>
    </div>
  );
}
