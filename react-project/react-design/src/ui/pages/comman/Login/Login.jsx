import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Login() {
  let [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: user,
    })
      .then((res) => {
        setCookie("user", res.data.data);
        setCookie("token", res.data.token);
        if (res.data.data.userType === "admin") navigate("/admin-dashbord");
        else navigate("/");
        toast.success("login successfully");
      })
      .catch((error) => {
        console.log("-----------  error----------->", error);
      });
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <div
        className="d-flex justify-content-center rounded-2 "
        style={{ backgroundColor: "#FFE8E8" }}
      >
        <Form
          style={{ backgroundColor: "#ffff" }}
          className="p-4 pt-1 w-25 mt-5 mb-5 border rounded-2"
        >
          <h1 className="text-center">Login</h1>
          <hr />
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter Your Email"
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter Your password"
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
          </FormGroup>
          <p>
            Create new Account...?
            <span
              className="text-info"
              role="button"
              onClick={() => navigate("/signup")}
            >
              SignUp
            </span>
          </p>
          <Button
            onClick={(e) => submitHandler(e)}
            className="w-100"
            color="danger"
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
