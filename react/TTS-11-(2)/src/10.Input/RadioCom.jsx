import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function RadioCom() {
  let [gender, setGender] = useState("");
  return (
    <div>
        <h1>gender : {gender}</h1>
      <Form>
        <FormGroup check>
          <Input
            checked={gender === "male"}
            type="radio"
            onChange={() => setGender("male")}
          />
          <Label check>male</Label>
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
            checked={gender === "kids"}
            type="radio"
            onChange={() => setGender("kids")}
          />
          <Label check>kids</Label>
        </FormGroup>
      </Form>
    </div>
  );
}
