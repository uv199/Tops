import React, { useState } from "react";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";

export default function MultiInput({
  user,
  setUser,
  setUserArray,
  userArray,
  toggle,
}) {
  const checkHandler = (hobby) => {
    let index = user.hobby?.findIndex((e) => e === hobby);
    if (index === -1) {
      setUser({ ...user, hobby: [...user?.hobby, hobby] });
    } else {
      setUser({ ...user, hobby: user.hobby.filter((e) => e !== hobby) });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUserArray([...userArray, user]);
    toggle();
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
            placeholder="with a placeholder"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
            placeholder="password placeholder"
            type="password"
          />
        </FormGroup>
        <FormGroup className="d-flex flex-column ">
          <Label check>Select Hobby</Label>
          <FormGroup check inline>
            <Input
              type="checkbox"
              onChange={() => checkHandler("reading")}
              checked={user?.hobby?.includes("reading")}
            />
            <Label check>Reading</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input
              type="checkbox"
              onChange={() => checkHandler("singing")}
              checked={user?.hobby?.includes("singing")}
            />
            <Label check>Singing</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input
              type="checkbox"
              onChange={() => checkHandler("traveling")}
              checked={user?.hobby?.includes("traveling")}
            />
            <Label check>Traveling</Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Button color="danger" className="w-100">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}
