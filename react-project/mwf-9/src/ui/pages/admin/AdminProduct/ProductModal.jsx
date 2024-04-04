import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default function ProductModal({ modal, toggle }) {
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
            <div className="d-flex gap-1">
              <Button color="danger" className="w-50">
                Submit
              </Button>
              <Button color="danger" className="w-50">
                Reset
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

const intialProduct = {
  title: "",
  description: "",
  brand: "",
  gender: "", // radio
  price: "",
  discountPercentage: "",
  availableStock: "",
  category: [], // select
  thumbnail: "",
  color: [], // select
  size: [], // checkBox
  mainCategorie: "",
};
