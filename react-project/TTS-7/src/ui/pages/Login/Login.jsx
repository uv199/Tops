import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function Login() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let [userArray, setUserArray] = useState([]);
  return (
    <div
      style={{
        marginTop: "50px",
        marginLeft: "400px",
        borderRadius: "2px",
        borderColor: "black",
      }}
    >
      <h3>LOGIN</h3>
      <div>
        <div>
          <Form>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter Your Email Address"
                  type="email"
                  onChange={(e) =>
                    setUser({ ...user, email: e?.target?.value })
                  }
                />
              </FormGroup>
            </Col>
            <br />
            <Col md={6}>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  id="Password"
                  placeholder="Enter Password"
                  type="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e?.target?.value })
                  }
                />
              </FormGroup>
            </Col>

            <Button
              style={{
                color: "white",
                backgroundColor: "black",
                height: "50px",
                width: "50%",
              }}
            >
              SIGN IN
            </Button>
          </Form>
          <br />
          <Button
            className="link-btn"
            onClick={() => props.onFormSwitch("login")}
            style={{
              backgroundColor: "whitesmoke",
              color: "black",
              height: "50px",
              width: "50%",
            }}
          >
            Forgot your password ?
          </Button>
        </div>
      </div>
    </div>
  );
}
