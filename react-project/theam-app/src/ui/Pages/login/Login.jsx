import { Controller, useForm } from "react-hook-form";
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
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [modal, setModal] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
    axios({
      method: "post",
      url: "http://127.0.0.1:3000/user/signin",
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((res) => {
        // console.log("res", res);
        navigate("/");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const toggle = () => setModal(!modal);

  return (
    <div style={{ height: "70vh" }}>
      <Modal isOpen={modal} toggle={toggle} {...props}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                {...register("email")}
              />
              {errors.email && <span>Please enter email</span>}
            </FormGroup> */}
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  {...field}
                />
              )}
            />
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                {...register("password")}
              />
              {errors.password && <span>Please enter password</span>}
            </FormGroup>
            <FormGroup>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
