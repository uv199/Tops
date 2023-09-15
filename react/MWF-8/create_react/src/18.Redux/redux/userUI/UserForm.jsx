import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addUser } from "../user/action";

function UserForm(props) {
  const [data, setData] = useState({ name: "", age: "" });

  function addDataToState() {
    props.userAdd(data);
    setData({ name: "", age: "" });
  }

  return (
    <>
      <Form className="m-5 border border-black p-4 rounded">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            value={data?.name}
            placeholder="Enter Your Name"
            type="name"
            onChange={(e) => setData({ ...data, name: e?.target?.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            id="age"
            value={data?.age}
            placeholder="Enetr Your Age"
            type="number"
            onChange={(e) => setData({ ...data, age: e?.target?.value })}
          />
        </FormGroup>
        <Button
          onClick={() => addDataToState()}
          color="danger"
          className="w-100"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

const toDispatchToProps = (dispatch) => {
  return {
    userAdd: (d) => dispatch(addUser(d)),
  };
};

export default connect(null, toDispatchToProps)(UserForm);
