import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BE_URL } from "../../../../config";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../redux/fetures/auth/auth";

const intialState = {
  email: "",
  password: "",
};
export default function Login() {
  let [credential, setCredential] = useState(intialState);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${BE_URL}/user/signin`,
      data: credential,
    })
      .then((res) => {
        console.log(res.data);
        dispatch(loginUser(res.data));
        toast.success("Register success");
        setCredential(intialState);
        navigate("/");
      })
      .catch((err) => {
        toast.error("somthing is wrong");
      });
  };

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Form
        onSubmit={loginHandler}
        className="border border-dark  rounded-2 p-4 mt-4"
      >
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            value={credential?.email}
            onChange={(e) =>
              setCredential({ ...credential, email: e?.target?.value })
            }
            placeholder="with a placeholder"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            value={credential?.password}
            onChange={(e) =>
              setCredential({ ...credential, password: e?.target?.value })
            }
            placeholder="password placeholder"
            type="password"
          />
        </FormGroup>
        <p
          className="text-decoration-underline text-info"
          role="button"
          onClick={() => navigate("/register")}
        >
          Create new Account...!
        </p>
        <Button color="danger" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
}
