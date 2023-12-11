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

const intialData = {
  email: "",
  password: "",
};

export default function RegisterModal({ modal, toggle }) {
  let [user, setUser] = useState(intialData);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    setUser(intialData);
    toggle();
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
            <Button color="danger" className="w-100">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
