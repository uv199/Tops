import { useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Form,
  FormGroup,
} from "reactstrap";

export default function Login(args) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [modal, setModal] = useState(true);
  const onSubmit = (data) => console.log(data);
  const toggle = () => setModal(!modal);

  return (
    <div style={{ height: "70vh" }}>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>Please enter email</span>}
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && <span>Please enter password</span>}
            </FormGroup>
            <Button className="w-100">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
