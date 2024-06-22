import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function Register() {
  let [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  let [userArray, setUserArray] = useState([]);
  return (
    <div style={{ marginTop: "50px", marginLeft: "400px" }}>
      <div>
        <h3>CREATE ACCOUNT</h3>
        <Form>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="Firsr Name"></Label>
                <Input
                  id="search"
                  placeholder="First Name"
                  type="search"
                  onChange={(e) =>
                    setUser({ ...user, firstname: e?.target?.value })
                  }
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="Password"></Label>
                <Input
                  id="Search"
                  placeholder="Last Name"
                  type="search"
                  onChange={(e) =>
                    setUser({ ...user, lastname: e?.target?.value })
                  }
                />
              </FormGroup>
            </Col>
          </Row>

          <Col md={6}>
            <FormGroup>
              <Label for="email"></Label>
              <Input
                id="email"
                placeholder="Email"
                type="email"
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Password"></Label>
              <Input
                id="Password"
                placeholder="Password"
                type="password"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </FormGroup>
          </Col>
          {/* <Col md={6}> */}
          <Button
            style={{
              backgroundColor: "black",
              color: "whitesmoke",
              height: "50px",
              width: "50%",
            }}
          >
            CREATE AN ACCOUNT
          </Button>
          {/* </Col> */}
        </Form>
      </div>
    </div>
  );
}
