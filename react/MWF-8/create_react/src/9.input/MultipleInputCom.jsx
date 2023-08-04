import React, { useState } from "react";
import "./input.css";
import { Button, Table } from "react-bootstrap";

// Note = state key name, input name must be same
export default function MultipleInputCom() {
  let [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  let [userData, setUserData] = useState([]);

  // to get data from input
  function getData(e) {
    console.log("---->", e.target.name);
    //...user -> for get old objects data
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  // add object(user state) into array(userData)
  function submitHandler() {
    setUserData([...userData, user]);
    setUser({
      email: "",
      password: "",
      name: "",
    });
  }
  return (
    <>
      <div className="inputForm">
        <label htmlFor="email">Email : </label>
        <input
          value={user.email}
          type="email"
          onChange={(e) => getData(e)}
          name="email"
          placeholder="please enter your email"
          id="email"
        />
        <label htmlFor="pass">Password : </label>
        <input
          required={true}
          value={user.password}
          type="text"
          name="password"
          onChange={(e) => getData(e)}
          placeholder="please enter your Password"
          id="pass"
        />
        <label htmlFor="pass">Password : </label>
        <input
          value={user.name}
          type="text"
          name="name"
          onChange={(e) => getData(e)}
          placeholder="please enter your Name"
          id="pass"
        />
        <Button
          className="mt-2"
          onClick={() => submitHandler()}
          variant="primary"
        >
          Submit
        </Button>
      </div>
      <Table className="mt-5" striped bordered hover>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

/*

let obj={
  a:20,
  b:40
}
obj.a
obj.b

let x = "b"
obj[x] => 40

let y = "a"
obj[y] => 20



arr = [{
  a:20,
  b:40
},{
  a:20,
  b:40
},{
  a:20,
  b:40
}]
arr.map((e)=>{

})
*/
