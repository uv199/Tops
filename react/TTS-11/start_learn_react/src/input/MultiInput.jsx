import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

export default function MultiInput() {
  let [userData, setUserData] = useState({
    add: "",
    email: "",
  });

  let [arr, setArr] = useState([]);

  function getData(e) {
    console.log("-----name", e.target.name);
    setUserData({ ...userData, [e.target.name]: e.target.value }); // add =>{add:e.target.value}  email ={email:e.target.value}
    console.log("-----", userData);
  }

  function addData(params) {
    setArr([...arr, userData]);
    setUserData({
      add: "",
      email: "",
    });
  }
  return (
    <>
      <h1>{userData.name}</h1>
      <h1>{userData.name}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={userData.email}
            name="email"
            onChange={(e) => getData(e)}
            type="text"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add </Form.Label>
          <Form.Control
            value={userData.add}
            name="add"
            onChange={(e) => getData(e)}
            type="text"
            placeholder="john wick"
          />
        </Form.Group>
        <Button variant="primary" onClick={() => addData()}>
          Add
        </Button>
      </Form>
      {arr.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Add</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.add}</td>
                  <td>{e.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
    </>
  );
}

// let obj = {
//   a: 20,
//   b: 40,
// };

// let x = "a";
// obj[x] = 50; // obj.a // obj.b
// obj.b;

// obj = {
//   [x]: 50, // add
// };
// obj ? = { a: 50 }

// obj = {
//     ...obj,
//   [x]: 50, // add
// };
// obj ? = { a: 50 ,b:40}

// obj = {
//   [x]: 30, //email
// };
