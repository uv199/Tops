import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { BE_URL } from "../../../config";

export default function LoginModal({ modal, toggle, registerToggle }) {
  let [user, setUser] = useState({ email: "", password: "" });
  let [cookie, setCookie] = useCookies([]);

  const toggleHandler = () => {
    toggle();
    registerToggle();
  };

  const navigate = useNavigate();
  const submitHandler = (e) => {
    console.log("----=-=-=>");
    e.preventDefault();
    axios({
      method: "post",
      url: `${BE_URL}/user/signin`,
      data: user,
    })
      .then((res) => {
        setCookie("user", res.data.data);
        setCookie("token", res.data.token);
        toggle();
        if (res.data.data.userType === "admin") navigate("/admin-dashbord");
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
        <ModalHeader toggle={toggle}>
          <h3>Login</h3>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => submitHandler(e)}>
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
              <Label for="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                value={user?.password}
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
                type="password"
              />
            </FormGroup>
            <p>
              Create Account..?
              <span
                className="ps-2 text-info text-decoration-underline"
                role={"button"}
                onClick={toggleHandler}
              >
                SignUp
              </span>
            </p>
            <Button color="danger" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
