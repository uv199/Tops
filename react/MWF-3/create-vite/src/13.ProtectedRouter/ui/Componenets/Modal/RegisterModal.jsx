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

export default function RegisterModal({ modal, toggle }) {
    
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
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
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
              />
            </FormGroup>
            <Button color="danger" className="w-100">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
