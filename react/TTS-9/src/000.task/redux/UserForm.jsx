import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addUser, editData } from "./redux/userslice";

export default function UserForm() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log("-----------  user----------->", user);
  const dispatch = useDispatch();

  const data = useSelector((store) => store.userSlice);
  console.log("-----------  data----------->", data);

  useEffect(() => {
    setUser(data.formData);
  }, [data.formData]);

  const addData = () => {
    dispatch(addUser(user));
    setUser({
      email: "",
      password: "",
    });
  };

  const updateHandler = () => {
    dispatch(editData(user));
    setUser({});
  };

  return (
    <>
      <h1>hello </h1>

      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={user?.email || ""}
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            value={user?.password || ""}
            id="examplePassword"
            name="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            placeholder="password placeholder"
            type="password"
          />
        </FormGroup>
        {data.index || data.index === 0 ? (
          <Button onClick={() => updateHandler()}>Update</Button>
        ) : (
          <Button
            onClick={() => {
              addData();
            }}
          >
            Submit
          </Button>
        )}
      </Form>
    </>
  );
}
