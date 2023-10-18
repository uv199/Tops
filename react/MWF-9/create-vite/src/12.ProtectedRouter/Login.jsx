import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Login() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("-----");
    localStorage.setItem("user", JSON.stringify(user));
    setUser({
      email: "",
      password: "",
    });
    navigate(-1);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <Form
          onSubmit={submitHandler}
          className="w-25 border border-black rounded-5 p-4 m-4"
        >
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              value={user?.email}
              name="email"
              placeholder="with a placeholder"
              type="email"
              onChange={(e) => setUser({ ...user, email: e?.target?.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              value={user.password}
              placeholder="password placeholder"
              type="password"
              onChange={(e) => setUser({ ...user, password: e?.target?.value })}
            />
          </FormGroup>
          <Button color="danger" className="w-100">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
