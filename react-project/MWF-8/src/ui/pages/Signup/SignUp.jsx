import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { BE_URL } from "../../../config";
import { toast } from "react-toastify";
import { login } from "../../../Redux/fetures/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  let [address, setAddress] = useState({
    add: "",
    city: "",
    state: "",
    pinCode: "",
  });

  let [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    age: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const submitHandler = (e) => {
    e.preventDefault();
    const realData = {
      ...user,
      address: [address],
    };
    // call signup api
    axios({
      method: "post",
      url: `${BE_URL}/user/signup`,
      data: realData,
    })
      .then((resData) => {
        console.log("resData", resData.data);
        dispatch(login(resData.data));
        setAddress({ add: "", city: "", state: "", pinCode: "" });
        setUser({ name: "", email: "", number: "", password: "", age: "" });
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <div
        style={{ backgroundColor: "lightblue" }}
        className="d-flex align-content-center justify-content-center p-3"
      >
        <Form
          onSubmit={submitHandler}
          className="w-50 border border-dark p-3 rounded-3"
        >
          <h1 className="text-center">USER-FORM</h1>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              placeholder="Enter your email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              onChange={(e) => setUser({ ...user, password: e?.target?.value })}
              placeholder="Please enter password"
              type="password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              onChange={(e) => setUser({ ...user, name: e?.target?.value })}
              placeholder="Please enter name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="number">Number</Label>
            <Input
              id="number"
              onChange={(e) => setUser({ ...user, number: e?.target?.value })}
              placeholder="Please enter number"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              id="age"
              onChange={(e) => setUser({ ...user, age: e?.target?.value })}
              placeholder="Please enter age"
              type="number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="add">Address</Label>
            <Input
              id="add"
              onChange={(e) =>
                setAddress({ ...address, add: e?.target?.value })
              }
              placeholder="Please enter add"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              id="city"
              onChange={(e) =>
                setAddress({ ...address, city: e?.target?.value })
              }
              placeholder="Please enter city"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              id="state"
              onChange={(e) =>
                setAddress({ ...address, state: e?.target?.value })
              }
              placeholder="Please enter state"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="pincode">Pincode</Label>
            <Input
              id="pincode"
              onChange={(e) =>
                setAddress({ ...address, pincode: e?.target?.value })
              }
              placeholder="Please enter pincode"
              type="text"
            />
          </FormGroup>

          <Button color="danger" className="w-100">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

/*
{
  name:  "urvish",
email: "uv@gmail.com",
number: "7575083084",
password: "123456",
age: 23,
address: [
  {
    add:"A-308 abc",
    city: "surat",
    state: "gujrat",
    pinCode: "395007",
  },
],
}
*/

/*
let user = {
    name:"",
    age:23
  }

// ---------1st way without copy-------
user = {name:"urvish"}
print - {name: 'urvish'}

  // ---------2st with copy copy-------

user= {...user,name:'urvish'}
print - {name: 'urvish', age: 23}

*/
