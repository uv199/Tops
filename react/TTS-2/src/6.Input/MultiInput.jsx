import React, { useState } from "react";
import { Button, Form, Input, Label, Table } from "reactstrap";

export default function MultiInput() {
  let [user, setUser] = useState({ email: "", password: "" });
  let [userArr, setUserArr] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()
    setUserArr([...userArr, user]);
    setUser({ email: "", password: "" });
  };

  return (
    <div>
      <Form className="border border-black rounded-md p-4 w-[500px]">
        <Label>Email</Label>
        <Input
          value={user.email}
          placeholder="Enter a email"
          onChange={(e) => setUser({ ...user, email: e.target?.value })}
        />
        <Label>Password</Label>
        <Input
          value={user.password}
          placeholder="Enter a password"
          onChange={(e) => setUser({ ...user, password: e.target?.value })}
        />
        <Button
          onClick={(e) => submitHandler(e)}
          className="mt-3 w-full"
          color="danger"
          type="submit"
        >
          Submit
        </Button>
      </Form>

      <hr />
      <Table>
        <thead>
          <tr>
            <th>SR</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {userArr.map((e,i) => {
            return (
              <tr>
                <th scope="row">{i+1}</th>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>
                  <Button className="mr-3">Edit</Button>
                  <Button>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

/*

let task = ""   
task = "test" => setTask("test")


let user = {email:"",password:""}
user = {...user,email:"test@test.com"} => setUser({...user,email:"test@test.com"})

*/
