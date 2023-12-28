import React, { useState } from "react";
import {
  Button,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import { toast } from "react-toastify";

const intialData = {
  email: "",
  password: "",
};

export default function LoginModal({ modal, toggle, regisetrToggle }) {
  console.log(regisetrToggle);
  let [user, setUser] = useState(intialData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const regData = JSON.parse(localStorage.getItem("userData") || "[]");
    let match = regData.find((e) => e.email === user?.email);
    if (match) {
      if (match.password !== user?.password)
        return toast.warn("password not match");
      localStorage.setItem("user", JSON.stringify(match));
      setUser(intialData);
      toggle();
      toast.success("login successfully...!");
    } else {
      toast.warn("Email not found");
    }
  };

  const redirect = () => {
    toggle();
    regisetrToggle();
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} onSubmit={(e) => handleSubmit(e)}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
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
                placeholder="password placeholder"
                type="password"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </FormGroup>
            <p
              onClick={redirect}
              role="button"
              className="text-decoration-underline text-primary"
            >
              Create Account...!
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
