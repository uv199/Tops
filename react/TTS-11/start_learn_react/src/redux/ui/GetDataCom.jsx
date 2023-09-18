import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addUser } from "../redux/user/action";

function GetDataCom(props) {
  let [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function addDataToState() {
    props.addData(addUser(userData));
    setUserData({
      email: "",
      password: "",
    });
  }
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            value={userData.email}
            placeholder="with a placeholder"
            type="email"
            onChange={(e) =>
              setUserData({ ...userData, email: e?.target?.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            value={userData.password}
            placeholder="password placeholder"
            type="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e?.target?.value })
            }
          />
        </FormGroup>
        <Button color={"danger"} onClick={() => addDataToState()}>
          Add User
        </Button>
      </Form>
    </>
  );
}

const toDispatchToPtops = (dispatch) => {
  return {
    addData: dispatch,
  };
};

export default connect(null, toDispatchToPtops)(GetDataCom);
