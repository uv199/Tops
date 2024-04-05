import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

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

export default function RegisterModal({ toggle, modal, loginToggle }) {
  let [user, setUser] = useState(initialUser);
  let [address, setAddress] = useState(initialAddress);

  const submitHandler = (e) => {
    e.preventDefault();
    let data = { ...user, address: [address] };
    console.log("-----------  data----------->", data);

    axios({
      method: "post",
      url: "http://localhost:9999/user/signup",
      data: data,
    })
      .then((res) => {
        console.log("-----------  res----------->", res.data);
        toast.success("sign up succesfully..!");
        toggle();
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setUser(initialUser);
        setAddress(initialAddress);
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
        toast.error("somthing went wrong..!");
      });
  };

  const modalHandler = () => {
    toggle();
    loginToggle();
    setAddress(initialAddress);
    setUser(initialUser);
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => submitHandler(e)}
            className="border p-4 rounded-2"
          >
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
              Already have account{" "}
              <span
                onClick={() => modalHandler()}
                role="button"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                login...!
              </span>
            </p>
            <Button color="danger" className="w-100">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

/*
 
  {
    "name": "urvish",
    "email": "uv@gmail.com",
    "number": "7895461237",
    "password": "123456",
    "age": 23,
    "address": [
      {
        "add": "vesu",
        "city": "surat",
        "state": "guj",
        "pinCode": "395007"
      }
    ]
	}


  state1 = {
     "name": "urvish",
    "email": "uv@gmail.com",
    "number": "7895461237",
    "password": "123456",
    "age": 23,
  }

  state2 =   {
        "add": "vesu",
        "city": "surat",
        "state": "guj",
        "pinCode": "395007"
      }

      submit ={
        ...state1,address:[state2]
      } 
*/
