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

export default function PopUp({ toggle, modal }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input />
            {/* <FormFeedback valid>Sweet! that name is available</FormFeedback> */}
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input />
            {/* <FormFeedback>Oh noes! that name is already taken</FormFeedback> */}
          </FormGroup>
          <p>Create new account..!</p>
          <Button color="primary" className="w-100" onClick={toggle}>
            Do Something
          </Button>{" "}
        </ModalBody>
      </Modal>
    </div>
  );
}
