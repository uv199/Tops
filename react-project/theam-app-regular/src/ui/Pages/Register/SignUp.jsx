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
import { NavLink, useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    number: "",
    address: [
      {
        add: "",
        city: "",
        pinCode: "",
        state: "",
      },
    ],
  });
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    console.log("userdara", userData);
  };

  return (
    <div
      style={{ maxWidth: "100vw", padding: "50px" }}
      className="d-flex justify-content-center "
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label for="name">Name</Label>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              id="name"
              placeholder="Enter your name"
              type="text"
              {...field}
              onChange={(e) =>
                setUserData({ ...userData, name: e?.target?.value })
              }
            />
          )}
        />
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
              onChange={(e) =>
                setUserData({ ...userData, email, age: e?.target?.value })
              }
            />
          )}
        />
        <Label for="number">Phone-No</Label>
        <Controller
          control={control}
          name="number"
          render={({ field }) => (
            <Input
              id="number"
              placeholder="Enter your number"
              type="text"
              {...field}
              onChange={(e) =>
                setUserData({ ...userData, number: e?.target?.value })
              }
            />
          )}
        />
        <Label for="age">Age</Label>
        <Controller
          control={control}
          name="age"
          render={({ field }) => (
            <Input
              id="age"
              placeholder="Enter your age"
              type="text"
              {...field}
              onChange={(e) =>
                setUserData({ ...userData, age: e?.target?.value })
              }
            />
          )}
        />
        <Label for="add">Address</Label>
        <Controller
          control={control}
          name="add"
          render={({ field }) => (
            <Input
              id="add"
              placeholder="Enter your address"
              type="text"
              {...field}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: [
                    ...userData[0],
                    { ...userData.address[0], add: e?.target?.value },
                  ],
                })
              }
            />
          )}
        />
        <Label for="city">City</Label>

        <Controller
          control={control}
          name="city"
          render={({ field }) => (
            <Input
              id="city"
              placeholder="Enter your city"
              type="text"
              {...field}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: [
                    ...userData[0],
                    { ...userData.address[0], city: e?.target?.value },
                  ],
                })
              }
            />
          )}
        />
        <Label for="state">State</Label>

        <Controller
          control={control}
          name="state"
          render={({ field }) => (
            <Input
              id="state"
              placeholder="Enter your state"
              type="text"
              {...field}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: [
                    ...userData[0],
                    { ...userData.address[0], state: e?.target?.value },
                  ],
                })
              }
            />
          )}
        />
        <Label for="pinCode">Pin-Code</Label>

        <Controller
          control={control}
          name="pinCode"
          render={({ field }) => (
            <Input
              id="pinCode"
              placeholder="Enter your pins-code"
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: [
                    ...userData[0],

                    { ...userData.address[0], pinCode: e?.target?.value },
                  ],
                })
              }
              type="text"
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
        <NavLink to="/login" className="text-decoration-underlines">
          Alredy have Account ? signIn
        </NavLink>

        <FormGroup>
          <Button type="submit" className="w-100">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

/*


    name:  "urvish",
    email: "uv@gmail.com",
    number: "7575083084",
    password: "123456",
    age: 23,
    address: [
      {
        add:"A-308 abc",
        city: "surat",
        state: "gujrat",
        pinCode: "395007",
      },
    ],

arress[0].city==
*/
