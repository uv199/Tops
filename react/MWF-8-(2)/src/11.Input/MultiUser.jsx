import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

let intialData = {
  name: "",
  email: "",
  password: "",
  hobby: [],
  gender: "",
};

export default function MultiUser() {
  const [user, setUser] = useState(intialData);
  const [userArr, setUserArr] = useState([]);
  useEffect(() => {
    console.log("---->");
    let jsondata = localStorage.getItem("userData");
    console.log("-----------  jsondata----------->", jsondata);
    let normalData = JSON.parse(jsondata) || [];
    console.log("-----------  normalData----------->", normalData);
    setUserArr(normalData);
  }, []);

  const addUser = (e) => {
    console.log("-----------  user----------->", user);
    e.preventDefault();
    let valueArr = Object.values(user);

    let empty = valueArr.includes("");
    if (!empty) {
      setUserArr([user, ...userArr]);
      localStorage.setItem("userData", JSON.stringify([user, ...userArr]));
      setUser(intialData);
    } else {
      toast.warn("Please fill all data");
    }
  };
  console.log("-----------  userArr----------->", userArr);

  const deleteHandler = (index) => {
    let filterData = userArr.filter((e, i) => i !== index);
    setUserArr(filterData);
    console.log("-----------  filterData----------->", filterData);
    localStorage.setItem("userData", JSON.stringify(filterData));
  };

  return (
    <div className="d-flex align-items-center flex-column">
      <h1>gender {user.gender}</h1>
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
            checked={user.gender === "male"}
            type="radio"
            onChange={() => setUser({ ...user, gender: "male" })}
          />
          <Label>Male</Label>
        </FormGroup>
        <FormGroup>
          <Input
            type="radio"
            checked={user.gender === "female"}
            onChange={() => setUser({ ...user, gender: "female" })}
          />
          <Label>female</Label>
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
            <th>GENDER</th>
            <th>HOBBY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {userArr.map((e, i) => {
            console.log("-----------  e----------->", e);
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.email}</td>
                <td>{e?.password}</td>
                <td>{e?.gender}</td>
                <td>{e?.hobby}</td>
                <td>
                  <Button color="danger" onClick={() => deleteHandler(i)}>
                    Delete
                  </Button>
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
task =""
taskarray = ["task"] 


user = { email:"", password:""}
array = [
    {email:"",password:""}
]
*/
