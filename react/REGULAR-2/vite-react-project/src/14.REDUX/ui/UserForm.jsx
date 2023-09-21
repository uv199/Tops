import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addUserAction } from "../redux/user/action";

function UserForm(props) {
  console.log("props", props);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function submitHandler(params) {
    props.addUser(addUserAction(user)); // dispatch method
    setUser({
      email: "",
      password: "",
    });
  }

  return (
    <>
      <Form className="border p-4 rounded m-5">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            value={user.email}
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            value={user.password}
            placeholder="Enter password"
            type="password"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
          />
        </FormGroup>
        <Button
          onClick={() => submitHandler()}
          className="w-100"
          color={"danger"}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

const toDispatchToProps = (dispatch) => {
  return {
    addUser: dispatch,
  };
};

export default connect(null, toDispatchToProps)(UserForm);
