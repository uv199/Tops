import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { BE_URL } from "../../../config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/fetures/auth/auth";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ toggle }) {
  let [user, setUser] = useState({
    email: "",
    password: "",
    img: "1704967957152.jpg",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${BE_URL}/user/signin`,
      data: user,
    })
      .then((resData) => {
        dispatch(login(resData?.data));
        toggle();
        toast.success("Login Success..!");
        if (resData?.data?.data?.userType === "customer") {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("err", err);
        toast.error(err.message);
      });
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          placeholder="Enter your Email "
          onChange={(e) => setUser({ ...user, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          placeholder="Enter your Password "
          onChange={(e) => setUser({ ...user, password: e?.target?.value })}
        />
      </FormGroup>
      <Button color="danger" className="w-100">
        Login
      </Button>
    </Form>
  );
}
