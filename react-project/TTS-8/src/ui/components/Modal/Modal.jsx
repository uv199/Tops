import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  FormFeedback,
  FormText,
  FormGroup,
} from "reactstrap";
import DynamicForm from "../DynamicForm";

export default function PopUp({ toggle, modal }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <DynamicForm />
          {/* <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input />
          </FormGroup> */}
          <p>Create new account..!</p>
          <Button color="primary" className="w-100" onClick={toggle}>
            Do Something
          </Button>{" "}
        </ModalBody>
      </Modal>
    </div>
  );
}
