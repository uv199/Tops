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
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BE_URL } from "../../../config";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/features/auth/authSlice";

export default function Login(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [modal, setModal] = useState(true);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    axios
      .post(`${BE_URL}/user/signin`, data)
      .then((resData) => {
        console.log("resData", resData.data);
        dispatch(logIn(resData.data));
        navigate("/");
      })
      .catch((err) => {
        console.log("err", err);
        toast.error(err.message);
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
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                )}
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
