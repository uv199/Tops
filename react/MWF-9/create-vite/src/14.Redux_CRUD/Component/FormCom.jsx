import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { addUser, updateUser } from "../redux/feature/formSlice";
import { toast } from "react-toastify";

let initialData = {
  email: "",
  password: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  gender: "",
};
export default function FormCom({ updateData, index}) {
  console.log("-----------  updateData----------->", updateData);
  let [user, setUser] = useState(updateData);

  useEffect(() => {
    setUser(updateData);
  }, [updateData]);

  const dispatch = useDispatch();

  const submitHandler = () => {
    let arr = Object.values(user);

    if (arr.includes("")) {
      // find index || object.keys()
      toast.error("Please fill the data");
     }
     
    else{
      dispatch(addUser(user));
      setUser(initialData);
    }

    
    
  };

  const updateHandler = () => {
    dispatch(updateUser({data:user,index}))
  }

  return (
    <div className="d-flex justify-content-center ">
      <Form className=" w-75 border border-dark p-4 mt-4 rounded-4 ">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                placeholder="Enter your email"
                value={user?.email}
                type="email"
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                placeholder="Enter your password"
                value={user?.password}
                type="password"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input
            id="exampleAddress"
            placeholder="Enter your address"
            value={user?.address}
            onChange={(e) => setUser({ ...user, address: e?.target?.value })}
          />
        </FormGroup>

        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input
                id="exampleCity"
                placeholder="Enter your city"
                value={user?.city}
                onChange={(e) => setUser({ ...user, city: e?.target?.value })}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input
                id="exampleState"
                placeholder="Enter your state"
                value={user?.state}
                onChange={(e) => setUser({ ...user, state: e?.target?.value })}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input
                id="exampleZip"
                value={user?.zip}
                placeholder="Enter your zip"
                onChange={(e) => setUser({ ...user, zip: e?.target?.value })}
              />
            </FormGroup>
          </Col>
        </Row>
        <Label>Gender</Label>
        <Row className="w-50">
          <Col>
            <FormGroup check>
              <Input
                placeholder="Enter your radio1"
                type="radio"
                checked={user?.gender === "male"}
                onChange={() => setUser({ ...user, gender: "male" })}
              />
              <Label check>Male</Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup check>
              <Input
                placeholder="Enter your radio1"
                type="radio"
                checked={user?.gender === "female"}
                onChange={() => setUser({ ...user, gender: "female" })}
              />
              <Label check>Female</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-3">
          <Button className="w-100" color="danger" onClick={submitHandler}>
            Sign Up
          </Button>
          <Button className="w-100" color="danger" onClick={updateHandler}>
            Update
          </Button>
        </Row>
      </Form>
    </div>
  );
}
