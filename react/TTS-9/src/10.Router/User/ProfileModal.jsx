import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  FormGroup,
  Form,
} from "reactstrap";

export default function Profile({ modal, toggle }) {
  const [paramsData] = useSearchParams();
  console.log("-----------  paramsData----------->", paramsData);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input id="name" value={paramsData.get("name")} disabled={true} />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                id="age"
                value={paramsData.get("age")}
                placeholder="password placeholder"
                disabled={true}
              />
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
