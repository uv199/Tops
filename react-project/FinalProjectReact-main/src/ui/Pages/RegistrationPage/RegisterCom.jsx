import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { BE_URL } from "../../../config";
import { toast } from "react-toastify";
import { login } from "../../../redux/fetures/authSlice/authSlice";
import { useDispatch } from "react-redux";

export default function RegisterCom() {
  let [address, setAddress] = useState({
    add: "",
    city: "",
    state: "",
    pincode: "",
  });
  let [userdata, setUserData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    age: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${BE_URL}user/signUp`,
      data: {
        ...userdata,
        address: [address],
      },
    })
      .then((res) => {
        console.log("res", res);
        dispatch(login(res?.data));
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <Form onSubmit={submitHandler}>
          <h2 className="pb-4" style={{ textAlign: "center" }}>
            <strong>Registration Form</strong>
          </h2>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              onChange={(e) =>
                setUserData({ ...userdata, name: e?.target?.value })
              }
              id="name"
              placeholder="Enter your fullname"
              style={{ width: "500px" }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={(e) =>
                setUserData({ ...userdata, email: e?.target?.value })
              }
              id="email"
              placeholder="Enter Email"
              type="email"
              style={{ width: "500px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="number">Number</Label>
            <Input
              onChange={(e) =>
                setUserData({ ...userdata, number: e?.target?.value })
              }
              id="number"
              placeholder="Enter number"
              type="number"
              style={{ width: "500px" }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              onChange={(e) =>
                setUserData({ ...userdata, age: e?.target?.value })
              }
              id="age"
              type="number"
              placeholder="Enter your age"
              style={{ width: "500px" }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="add">Address</Label>
            <Input
              onChange={(e) =>
                setAddress({ ...address, add: e?.target?.value })
              }
              id="add"
              type="text"
              placeholder="Apartment, studio, or floor..etc"
              style={{ width: "500px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              onChange={(e) =>
                setAddress({ ...address, city: e?.target?.value })
              }
              id="city"
              type="text"
              placeholder="Enter your city"
              style={{ width: "500px" }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="pincode">Pincode</Label>
            <Input
              onChange={(e) =>
                setAddress({ ...address, pincode: e?.target?.value })
              }
              id="pincode"
              type="text"
              placeholder="Enter your pincode"
              style={{ width: "500px" }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="state">State</Label>
            <Input
              onChange={(e) =>
                setAddress({ ...address, state: e?.target?.value })
              }
              id="state"
              type="text"
              placeholder="Enter your state"
              style={{ width: "500px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={(e) =>
                setUserData({ ...userdata, password: e?.target?.value })
              }
              id="password"
              placeholder="Enter Password"
              type="password"
              style={{ width: "500px" }}
            />
          </FormGroup>
          <Link to={"/login"}>Don't have account ? Signin</Link>
          <br />
          <Button
            style={{
              height: "55px",
              width: "480px",
              fontSize: "20px",
              fontWeight: "bold",
              border: "none",
              borderRadius: 0,
              backgroundColor: "#5FB255",
            }}
          >
            SIGN UP
          </Button>
        </Form>
      </div>
    </>
  );
}
