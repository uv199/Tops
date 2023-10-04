import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
import { redirect, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/features/auth/authSlice";

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
    console.log("data", data);
    axios
      .post("http://localhost:9999/user/signin", data)
      .then((resData) => {
        dispatch(login(resData.data));
        if (resData?.data?.data?.userType === "admin") {
          navigate("/dashbord");
        }
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
              <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              {...register("email")}
              />
              {errors.email && <span>Please enter email</span>}
            </FormGroup> */}
            <Label for="email">Email</Label>
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
            <NavLink to="/signup" className="text-decoration-underlines">
              New User ? signUp
            </NavLink>

            <FormGroup>
              <Button type="submit" className="w-100">
                Submit
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
