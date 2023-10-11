import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ActivitySquareIcon } from "lucide-react";
import axios from "axios";
import { BE_URL } from "../../../config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/features/auth/authSlice";

export default function SignUp(props) {
  let [address, setAddress] = useState({
    add: "",
    city: "",
    pinCode: "",
    state: "",
  });
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    number: "",
  });
  const navigate = useNavigate();
  const {
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("userData", userData);

    axios
      .post(`${BE_URL}/user/signUp`, { ...userData, address: [address] })
      .then((res) => {
        dispatch(login(res.data));
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div
      style={{ maxWidth: "100vw", padding: "50px" }}
      className="d-flex justify-content-center "
    >
      <Form onSubmit={onSubmit}>
        <Label for="name">Name</Label>
        <Input
          onChange={(e) => setUserData({ ...userData, name: e?.target?.value })}
          id="name"
          placeholder="Enter your name"
          type="text"
        />

        <Label for="email">Email</Label>

        <Input
          onChange={(e) =>
            setUserData({ ...userData, email: e?.target?.value })
          }
          id="email"
          placeholder="Enter your email"
          type="email"
        />

        <Label for="number">Phone-No</Label>

        <Input
          onChange={(e) =>
            setUserData({ ...userData, number: e?.target?.value })
          }
          id="number"
          placeholder="Enter your number"
          type="text"
        />

        <Label for="age">Age</Label>

        <Input
          onChange={(e) => setUserData({ ...userData, age: e?.target?.value })}
          id="age"
          placeholder="Enter your age"
          type="text"
        />

        <Label for="add">Address</Label>

        <Input
          onChange={(e) => setAddress({ ...address, add: e?.target?.value })}
          id="add"
          placeholder="Enter your address"
          type="text"
        />

        <Label for="city">City</Label>

        <Input
          onChange={(e) => setAddress({ ...address, city: e?.target?.value })}
          id="city"
          placeholder="Enter your city"
          type="text"
        />

        <Label for="state">State</Label>

        <Input
          onChange={(e) => setAddress({ ...address, state: e?.target?.value })}
          id="state"
          placeholder="Enter your state"
          type="text"
        />

        <Label for="pinCode">Pin-Code</Label>

        <Input
          onChange={(e) =>
            setAddress({ ...address, pinCode: e?.target?.value })
          }
          id="pinCode"
          placeholder="Enter your pins-code"
          type="text"
        />

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            onChange={(e) =>
              setUserData({ ...userData, password: e?.target?.value })
            }
            id="password"
            placeholder="Enter your password"
            type="password"
          />
        </FormGroup>
        <NavLink to="/login" className="text-decoration-underlines">
          Alredy have Account ? signIn
        </NavLink>

        <FormGroup>
          <Button type="submit" className="w-100">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

/*


    name:  "urvish",
    email: "uv@gmail.com",
    number: "7575083084",
    password: "123456",
    age: 23,
    address: [
      {
        add:"A-308 abc",
        city: "surat",
        state: "gujrat",
        pinCode: "395007",
      },
    ],

arress[0].city==
*/
