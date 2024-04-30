import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function MultiInput() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let [userArray, setUserArray] = useState([]);


  return (
    <div>
      <h1>Email :{user.email}</h1>
      <h1>password :{user.password}</h1>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                placeholder="with a placeholder"
                type="email"
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                id="Password"
                placeholder="password placeholder"
                type="password"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Button color="danger">Sign in</Button>
      </Form>
    </div>
  );
}
