import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
// import Select from 'react-select';

const userTypeOptions = [
  { value: "user", label: "User" },
  { value: "admin", label: "Admin" },
  { value: "employee", label: "Employee" },
];

export default function RegisterModal({ modal, toggle }) {
  let [user, setUser] = useState({
    email: "",
    password: "",
    gender: "male",
    hobby: [],
    userType: "",
  });

  const checkCoxHandler = (item) => {
    const match = user?.hobby?.includes?.(item);
    if (match) {
      const filter = user?.hobby?.filter?.((e) => e !== item);
      setUser({ ...user, hobby: filter });
    } else {
      setUser({ ...user, hobby: [...user?.hobby, item] });
    }
  };

  // to get from data
  const getData = (e) => {
    e?.preventDefault();
    let jsonData = localStorage?.getItem("dataArray") || "[]";
    console.log("-----------  jsonData----------->", jsonData);
    let noramalData = JSON?.parse(jsonData);
    console.log("-----------  noramalData----------->", noramalData);
    localStorage?.setItem("dataArray", JSON?.stringify([...noramalData, user]));
    setUser({
      email: "",
      password: "",
      gender: "male",
      hobby: [],
      userType: "",
    });
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form onSubmit={getData}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                placeholder="Enter your email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
                placeholder="Enter your password"
                type="password"
              />
            </FormGroup>

            <Label>Gender</Label>
            <FormGroup tag="fieldset" className="d-flex gap-3">
              <FormGroup check>
                <Input
                  checked={user?.gender === "male"}
                  onChange={() => setUser({ ...user, gender: "male" })}
                  name="radio1"
                  type="radio"
                />
                <Label check>Male</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  checked={user?.gender === "female"}
                  onChange={() => setUser({ ...user, gender: "female" })}
                  name="radio1"
                  type="radio"
                />
                <Label check>Female</Label>
              </FormGroup>
              <FormGroup check disabled>
                <Input
                  checked={user?.gender === "kids"}
                  onChange={() => setUser({ ...user, gender: "kids" })}
                  name="radio1"
                  type="radio"
                />
                <Label check>Kids</Label>
              </FormGroup>
            </FormGroup>
            <div>
              <Label>Hobby</Label>
            </div>
            <FormGroup check inline>
              <Input
                onClick={() => checkCoxHandler("reading")}
                checked={user?.hobby?.includes("reading")}
                type="checkbox"
              />
              <Label check>Reading</Label>
            </FormGroup>
            <FormGroup>
              <Input
                onClick={() => checkCoxHandler("traveling")}
                checked={user?.hobby?.includes("traveling")}
                type="checkbox"
              />
              <Label>Traveling</Label>

              <Input
                onClick={() => checkCoxHandler("singning")}
                checked={user?.hobby?.includes("singning")}
                type="checkbox"
              />
              <Label>Singing</Label>
              <Input
                onClick={() => checkCoxHandler("sport")}
                checked={user?.hobby?.includes("sport")}
                type="checkbox"
              />
              <Label check>Sports</Label>
            </FormGroup>
            <FormGroup className="mt-2">
              <Label>User Type</Label>
              <Select
                onChange={(e) => setUser({ ...user, userType: e?.value })}
                options={userTypeOptions}
              />
            </FormGroup>
            <div>
              <Button color="danger" className="w-100 mt-3">
                Submit
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
