import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addUser } from "../redux/user/action";

function GetDataCom(props) {
  let [userData, setUserData] = useState({
    name: "",
    email: "",
    adderess: {
      city: "",
      pincode: "",
    },
  });
  console.log("userData---->", userData);

  function addDataToState() {
    props.addData(addUser(userData));
    setUserData({
      name: "",
      email: "",
      adderess: {
        city: "",
        pincode: "",
      },
    });
  }
  return (
    <>
      <h1>city : {userData?.adderess?.city}</h1>
      <h1>pincode : {userData?.adderess?.pincode}</h1>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            value={userData.email}
            placeholder="Enter"
            type="email"
            onChange={(e) =>
              setUserData({ ...userData, email: e?.target?.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            value={userData.name}
            placeholder="Enter your name"
            type="text"
            onChange={(e) =>
              setUserData({ ...userData, name: e?.target?.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="pincode">Pincode</Label>
          <Input
            id="pincode"
            value={userData?.adderess?.pincode}
            placeholder="Enter your pincode"
            type="text"
            onChange={(e) =>
              setUserData({
                ...userData,
                adderess: {
                  ...userData?.adderess,
                  pincode: e?.target?.value,
                },
              })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            id="city"
            value={userData?.adderess?.city}
            placeholder="Enter your city"
            type="text"
            onChange={(e) =>
              setUserData({
                ...userData,
                adderess: {
                  ...userData?.adderess,
                  city: e?.target?.value,
                },
              })
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

// let abc = {
//   name: "",
//   email: "",
//   adderess: {
//     city: "",
//     // state: "",
//     pincode: "",
//   },
// };
// let m = {
//   ...abc,
//   [addres.city]: "test",
// };
