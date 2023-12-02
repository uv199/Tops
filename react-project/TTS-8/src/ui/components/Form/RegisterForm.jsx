import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button, Label, Input, FormGroup, Form } from "reactstrap";
import { login } from "../../../redux/fetures/auth/auth";
import { BE_URL } from "../../../config";

const intialData = {
  name: "",
  email: "",
  number: "",
  gender: "male",
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
        value={data?.[feild]}
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

export default function RegisterForm({ manageToggle, toggle }) {
  const [user, setUser] = useState(intialData);
  const [address, setAddress] = useState(intialAdd);

  const dispatch = useDispatch();

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
        url: `${BE_URL}/user/signUp`,
        data: apiData,
      })
        .then((resData) => {
          dispatch(login(resData.data));
          toggle();
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
            <Input
              onChange={() => setUser({ ...user, gender: "male" })}
              type="radio"
              checked={user.gender === "male"}
            />
            <Label check>Male</Label>
          </FormGroup>
          <FormGroup check>
            <Input
              onChange={() => setUser({ ...user, gender: "female" })}
              type="radio"
              checked={user.gender === "female"}
            />
            <Label check>Female</Label>
          </FormGroup>
          <FormGroup check disabled>
            <Input
              onChange={() => setUser({ ...user, gender: "kids" })}
              type="radio"
              checked={user.gender === "kids"}
            />

            <Label check>Kids</Label>
          </FormGroup>
        </FormGroup>
        <p
          style={{ textDecoration: "underline", color: "blue" }}
          role="button"
          onClick={manageToggle}
        >
          Already have account..!
        </p>
        <Button color="danger" className="w-100">
          Create Account
        </Button>
      </Form>
    </>
  );
}
