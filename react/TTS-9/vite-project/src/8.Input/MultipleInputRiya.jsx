import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function MultipleInputRiya() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let [allUser, setAllUser] = useState([]);
  let [index, setIndex] = useState(null);
  const addData = () => {
    // console.log("first",user)
    setAllUser([...allUser, user]);
    setUser({ email: "", password: "" });
  };
  const updateData = (data, index) => {
    // console.log("----->",data,index)
    setUser(data);
    setIndex(index);
  };
  const updateHandler = () => {
    if (index || index === 0) {
      allUser.splice(index, 1, user);
      setAllUser([...allUser]);
      setUser({ email: "", password: "" });
      setIndex(null);
    }
  };
  return (
    <>
      <h1>hello </h1>

      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={user.email}
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
            value={user.password}
            id="examplePassword"
            name="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            placeholder="password placeholder"
            type="password"
          />
        </FormGroup>
        {index || index === 0 ? (
          <Button
            onClick={() => {
              updateHandler();
            }}
          >
            Update
          </Button>
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
      <ul>
        {allUser.map((e, i) => {
          return (
            <li className="m-2">
              <Button
                color="danger"
                onClick={() => {
                  updateData(e, i);
                }}
                className="me-3"
              >
                Edit
              </Button>
              {e.email} | {e.password}
            </li>
          );
        })}
      </ul>
    </>
  );
}
