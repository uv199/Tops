import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

let intialData = {
  name: "",
  email: "",
  password: "",
  color: [],
};

export default function MultiInput() {
  const [user, setUser] = useState(intialData);

  const [userArr, setUserArr] = useState([]);
  const addUser = (e) => {
    e.preventDefault();
    console.log("----data--->", user);
    // user = {email:"test",pass:"123"}
    // userArr = [ {email:"test",pass:"123"}]
    // some
    let valueArr = Object.values(user);

    let empty = valueArr.includes("");

    if (!empty) {
      setUserArr([user, ...userArr]);
      setUser(intialData);
    } else {
      toast.warn("Please fill all data");
    }
  };

  const checkHandler = (clr, e) => {
    if (e?.target?.checked) {
      setUser({ ...user, color: [...user.color, clr] });
    } else {
      let filterData = user.color.filter((e) => e !== clr);
      setUser({ ...user, color: filterData });
    }
  };

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
        <FormGroup>
          <Input
            type="checkbox"
            checked={user.color.includes("red")}
            onChange={(e) => checkHandler("red", e)}
          />
          <Label>red</Label>
        </FormGroup>
        <FormGroup>
          <Input
            type="checkbox"
            checked={user.color.includes("green")}
            onChange={(e) => checkHandler("green", e)}
          />
          <Label>green</Label>
        </FormGroup>
        <FormGroup>
          <Input
            type="checkbox"
            checked={user.color.includes("yellow")}
            onChange={(e) => checkHandler("yellow", e)}
          />
          <Label>yellow</Label>
        </FormGroup>
        <FormGroup>
          <Input
            type="checkbox"
            checked={user.color.includes("black")}
            onChange={(e) => checkHandler("black", e)}
          />
          <Label>black</Label>
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
            <th>COLOR</th>
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
                <td>{e?.color.join("-")}</td>
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
let color = []
let usre = {
  color:[]
}
*/
