import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Table,
} from "reactstrap";

export default function MultipleInput() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let [userArr, setUserArr] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setUserArr([...userArr, user]);
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-100 d-flex justify-content-center flex-column align-items-center ">
      <Form
        onSubmit={(e) => submitHandler(e)}
        className="mt-3 w-50 p-3 border border-dark rounded-2"
      >
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
          />
        </FormGroup>

        <Button
          //   onClick={(e) => submitHandler(e)}
          color="danger"
          className="w-100"
        >
          Submit
        </Button>
      </Form>
      <hr className="w-100" />
      <Table className="w-75 mt-4" striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userArr.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.email}</td>
                <td>{e?.password}</td>
                <td>
                  <Button color="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
