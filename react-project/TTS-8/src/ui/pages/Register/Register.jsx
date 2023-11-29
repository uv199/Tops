import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
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
const InputCom = ({ feild, type, setData, data }) => {
  return (
    <FormGroup>
      <Label style={{ textTransform: "capitalize" }} for={feild}>
        {feild}
      </Label>
      <Input
        onChange={(e) => setData({ ...data, [feild]: e?.target?.value })}
        value={data[feild]}
        id={feild}
        placeholder={`Enter your ${feild}`}
        type={"text" || type}
      />
    </FormGroup>
  );
};

let regiserForm = [
  { feild: "name" },
  { feild: "email" },
  { feild: "number" },
  { feild: "age" },
  { feild: "password" },
  { feild: "confirmPassword" },
];

let addressForm = [
  { feild: "add" },
  { feild: "city" },
  { feild: "state" },
  { feild: "pinCode" },
];

export default function Register() {
  const [user, setUser] = useState(intialData);
  const [address, setAddress] = useState(intialAdd);

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword)
      toast.error("Password and confirm password is not same");
    else {
      let apiData = {
        ...user,
        address: [address],
      };
      delete apiData.confirmPassword;
      console.log("apiData", apiData);
      axios({
        method: "post",
        url: "http://localhost:9999/user/signUp",
        data: apiData,
      })
        .then((resData) => {
          console.log("resData", resData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <Form onSubmit={submitHandler}>
        {regiserForm.map((ele) => {
          return <InputCom {...ele} setData={setUser} data={user} />;
        })}
        {addressForm.map((ele) => {
          return <InputCom {...ele} setData={setAddress} data={address} />;
        })}

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
