import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function MultiInput() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userArr, setUserArr] = useState([]);
  const addUser = (e) => {
    e.preventDefault();
    setUserArr([user, ...userArr]);
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };
  console.log("-----------  userArr----------->", userArr);

  return (
    <div className="d-flex align-items-center flex-column">
      {/* <h1>email is {user.email}</h1>
      <h1>password is {user.password}</h1> */}
      <Form
        onSubmit={(e) => addUser(e)}
        className="w-50 border border-dark p-3 rounded-2"
      >
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            type="text"
            value={user.name}
            // ... copy old object
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={user.email}
            // ... copy old object
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </FormGroup>
        <Button className="w-100" color="danger">
          Submit
        </Button>
      </Form>

      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>SR.</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
          </tr>
        </thead>
        <tbody>
          {userArr?.map?.((e, i) => {
            console.log("-----------  e----------->", e);
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.email}</td>
                <td>{e?.password}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

/*
task =""
taskarray = ["task"] 


user = { email:"", password:""}
array = [
    {email:"",password:""}
]
*/
