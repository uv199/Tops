import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function FormCom() {
  let [user, setUser] = useState({
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    gender: "",
  });

  return (
    <div>
      <Form className="border border-dark p-4 mt-4 rounded-4 ">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
                onChange={e.target.value}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input
            id="exampleAddress"
            name="address"
            placeholder="1234 Main St"
          />
        </FormGroup>

        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input id="exampleCity" name="city" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input id="exampleState" name="state" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input id="exampleZip" name="zip" />
            </FormGroup>
          </Col>
        </Row>
        <Label>Gender</Label>
        <Row className="w-50">
          <Col>
            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Male</Label>
            </FormGroup>{" "}
          </Col>
          <Col>
            <FormGroup check>
              <Input name="radio1" type="radio" /> <Label check>Female</Label>
            </FormGroup>{" "}
          </Col>
        </Row>
        <Row className="mt-3">
          <Button className="w-100" color="danger">
            Sign in
          </Button>
        </Row>
      </Form>
    </div>
  );
}
