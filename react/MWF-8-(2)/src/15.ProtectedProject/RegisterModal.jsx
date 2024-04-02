import React, { useState } from "react";
import Select from "react-select";
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

const options = [
  { value: "user", label: "User" },
  { value: "employee", label: "Employee" },
  { value: "admin", label: "Admin" },
];

export default function RegisterModal({ toggle, modal }) {
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
            <FormGroup>
              <Label for="examplePassword">UserType</Label>
              <Select options={options} />
            </FormGroup>
            <Button color="danger" className="w-100" onClick={toggle}>
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


  state1 = {
     "name": "urvish",
    "email": "uv@gmail.com",
    "number": "7895461237",
    "password": "123456",
    "age": 23,
  }

  state2 =   {
        "add": "vesu",
        "city": "surat",
        "state": "guj",
        "pinCode": "395007"
      }

      submit ={
        ...state1,address:[state2]
      } 
*/


