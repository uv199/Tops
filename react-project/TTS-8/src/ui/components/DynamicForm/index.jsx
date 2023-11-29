import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  FormFeedback,
  FormText,
  FormGroup,
  Form,
} from "reactstrap";

const intialData = {
  name: "",
  email: "",
  number: "",
  age: "",
  password: "",
  confirmPassword: "",
};

const intialAdd = {
  add: "",
  city: "",
  state: "",
  pinCode: "",
};
const InputCom = ({ feild, type }) => {
  return (
    <FormGroup>
      <Label style={{ textTransform: "capitalize" }} for={feild}>
        {feild}
      </Label>
      <Input
        id={feild}
        placeholder={`Enter your ${feild}`}
        type={"text" || type}
      />
    </FormGroup>
  );
};

export default function DynamicForm() {
  const [user, setUser] = useState(intialData);
  const [address, setAddress] = useState(intialAdd);
  return (
    <>
      <Form>
        <InputCom feild={"name"} />
        <InputCom feild={"email"} />
        <InputCom feild={"number"} type={"number"} />
        <InputCom feild={"age"} type={"number"} />
        <InputCom feild={"address"} type={"textarea"} />
        <InputCom feild={"city"} />
        <InputCom feild={"pincode"} />
        <InputCom feild={"password"} type={"password"} />
        <InputCom feild={"Confirm Password"} type={"password"} />

        <FormGroup>
          <Label for="address">address</Label>
          <Input id="address" name="address" type="textarea" />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Gender</legend>
          <FormGroup check>
            <Input name="male" type="radio" />
            <Label check>Male</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="female" type="radio" />
            <Label check>Female</Label>
          </FormGroup>
          <FormGroup check disabled>
            <Input name="kids" type="radio" />
            <Label check>Kids</Label>
          </FormGroup>
        </FormGroup>
        <Button color="danger">Submit</Button>
      </Form>
    </>
  );
}
