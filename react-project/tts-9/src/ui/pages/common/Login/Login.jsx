import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { login } from "../../../../redux/fetures/auth/authSlice";
import { useNavigate } from "react-router-dom";

const initialUser = {
  email: "",
  password: "",
};

export default function Login() {
  let [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: user,
    })
      .then((res) => {
        dispatch(login(res.data));
        toast.success("User login success");

        if (res?.data?.data?.userType === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error("Somthing is wrong");
      });
  };

  return (
    <div className="d-flex flex-column align-items-center p-4">
      <h1>User Login Form</h1>
      <hr style={{ width: "50%" }} />
      <Form
        onSubmit={(e) => submitHandler(e)}
        className="w-50 border p-4 rounded-2"
      >
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
          <Label for="Password">Password</Label>
          <Input
            placeholder="Enter your Password"
            id="Password"
            name="text"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
            type="text"
          />
        </FormGroup>
        <p>
          Create new account{" "}
          <span
            onClick={() => navigate("/signup")}
            role="button"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            signUp...!
          </span>
        </p>
        <Button color="danger" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
}
//  url: "http://localhost:9999/user/login"
// data : {email,password}
