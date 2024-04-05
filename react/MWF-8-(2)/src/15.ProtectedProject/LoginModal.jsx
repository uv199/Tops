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

const intialData = { email: "", password: "" };
export default function LoginModal({ toggle, modal }) {
  let [credential, setCredentials] = useState(intialData);

  const loginHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: credential,
    })
      .then((res) => {
        console.log("-----------  res----------->", res.data);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        toast.success("login successfully..!");
        setCredentials(intialData);
        toggle();
      })
      .catch((err) => {
        console.log("-----------  err----------->", err);
      });
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => loginHandler(e)}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                value={credential.email}
                onChange={(e) =>
                  setCredentials({ ...credential, email: e?.target?.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
                value={credential.password}
                onChange={(e) =>
                  setCredentials({ ...credential, password: e?.target?.value })
                }
              />
            </FormGroup>
            <p>
              Create account{" "}
              <span
                role="button"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Signup...!
              </span>
            </p>
            <Button color="danger" className="w-100">
              Login
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
*/
