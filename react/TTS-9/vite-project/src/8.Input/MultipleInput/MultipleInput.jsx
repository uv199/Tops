import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function MultipleInput() {
  let [user, setUser] = useState({
    email: "",
    city: "",
    password: "",
  });

  let [allUser, setAllUser] = useState([]);

  const addData = (e) => {
    if (user?.email?.length > 0 && user?.password?.length > 0) {
      e.preventDefault();
      setAllUser([...allUser, user]);
      toast.success("User Added succesfully");
      setUser({
        email: "",
        password: "",
        city: "",
      });
    } else {
      toast.error("Please fill data");
    }
  };

  const deleteHandler = (index) => {
    console.log("------>", index);
    // delete with splice
    // allUser.splice(index, 1);
    // setUser([...allUser]);

    // delete with filter
    let filterdData = allUser.filter((e, i) => i !== index);
    console.log("filterdData", filterdData);
    setAllUser(filterdData);
  };

  return (
    <>
      <Form className="border border-dark p-3 rounded-3">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={user?.email}
            id="exampleEmail"
            name="email"
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
            // e?.target?.value = "test"
            // setUser(e?.target?.value)} =>  user = "test"
            // setUser ({email:e?.target?.value}) => user = { email:"test"}
          />
        </FormGroup>
        <FormGroup>
          <Label for="City">City</Label>
          <Input
            id="City"
            value={user?.city}
            placeholder="Enter your city"
            type="text"
            onChange={(e) => setUser({ ...user, city: e?.target?.value })}
            // e?.target?.value = "test"
            // setUser(e?.target?.value)} =>  user = "test"
            // setUser ({email:e?.target?.value}) => user = { email:"test"}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            value={user?.password}
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
          />
        </FormGroup>
        <Button onClick={(e) => addData(e)} className="w-100" color="danger">
          Submit
        </Button>
      </Form>

      <Table striped>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>City</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>{e.city}</td>
                <td style={{ color: "green" }}>{e.password}</td>
                <td>
                  <Button onClick={() => deleteHandler(i)} color="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

/*
getItem("key_Name")
removeItem("key_Name")
clear()
localstorage.setItem(key name, data) => localstorage.setItem("user", "{'name':'urvish'}")
*/
