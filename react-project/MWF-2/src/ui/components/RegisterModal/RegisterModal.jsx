import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { BE_URL } from "../../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const initialUser = {
  name: "",
  email: "",
  number: "",
  password: "",
  conPassword: "",
  gender: "",
  age: "",
};
const initialAddress = {
  add: "",
  city: "",
  state: "",
  pinCode: "",
};

export default function RegisterModal({ modal, toggle, loginToggle }) {
  let [user, setUser] = useState(initialUser);
  let [address, setAddress] = useState(initialAddress);
  const [cookies, setCookie] = useCookies();
  const toggleHandler = () => {
    toggle();
    loginToggle();
  };
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    let mainData = { ...user, address: [address] };
    axios({
      method: "post",
      url: `${BE_URL}/user/signUp`,
      data: mainData,
    })
      .then((res) => {
        setCookie("user", res.data.data);
        setCookie("token", res.data.token);
        // toggle();
        if (res.data.data.userType === "admin") navigate("/dashbord");
        else navigate(-1);
        toast.success("Registration success..!");
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
        toast.error(err.message);
      });
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Registration</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => submitHandler(e)}>
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
            <FormGroup tag="fieldset">
              <Label>Gender</Label>
              <FormGroup>
                <Input ed={user.gender === "male"} type="radio" />{" "}
                <Label>Male</Label>
              </FormGroup>
              <FormGroup>
                <Input checked={user.gender === "female"} type="radio" />{" "}
                <Label>Female</Label>
              </FormGroup>
            </FormGroup>

            <FormGroup>
              <Label for="add">Add-1</Label>
              <Input
                placeholder="Enter your add"
                id="add"
                name="text"
                onChange={(e) =>
                  setAddress({ ...address, add: e?.target?.value })
                }
                type="textarea"
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                placeholder="Enter your City"
                id="city"
                name="text"
                onChange={(e) =>
                  setAddress({ ...address, city: e?.target?.value })
                }
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                placeholder="Enter your state"
                id="state"
                name="text"
                onChange={(e) =>
                  setAddress({ ...address, state: e?.target?.value })
                }
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="pinCode">Pincode</Label>
              <Input
                placeholder="Enter your pinCode"
                id="pinCode"
                name="text"
                onChange={(e) =>
                  setAddress({ ...address, pinCode: e?.target?.value })
                }
                type="number"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                placeholder="Enter your Password"
                id="Password"
                name="text"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
                type="number"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Confirm password</Label>
              <Input
                placeholder="Enter your Password"
                id="Password"
                name="text"
                onChange={(e) =>
                  setUser({ ...user, conPassword: e?.target?.value })
                }
                type="number"
              />
            </FormGroup>
            <p>
              Already have Account..?
              <span
                className="ps-2 text-info text-decoration-underline"
                role={"button"}
                onClick={toggleHandler}
              >
                Login
              </span>
            </p>
            <Button color="danger" className="w-100">
              SignUp
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

let data = {
  name: "urvish",
  userType: "customer",
  email: "uvpatel199@gmail.com",
  number: "1213",
  password: "string",
  age: 12,
  address: [
    {
      add: "wefwsdvwfe",
      city: "surat",
      state: "gujarat",
      pinCode: "395007",
    },
  ],
};
