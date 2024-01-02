import axios from "axios";
import React from "react";
import { Button } from "reactstrap";

const data = {
  name: "urvish--1",
  email: "uv111@gmail.com",
  number: "7895461237",
  password: "123456",
  age: 23,
  address: [
    {
      add: "vesu",
      city: "surat",
      state: "guj",
      pinCode: "395007",
    },
    {
      add: "vesu2",
      city: "surat2",
      state: "guj2",
      pinCode: "395007-2",
    },
  ],
};
export default function SimpleApi() {
  const callApi = () => {
    axios({
      method: "get",
      url: "http://localhost:9999/user/getAll",
    })
      .then((res) => {
        console.log("res?.data", res?.data);
      })
      .catch((err) => {
        console.log("err-----", err);
      });
  };

  const createUser = () => {
    axios({
      method: "post",
      url: "http://localhost:9999/user/signUp",
      data: data,
    }).then((res) => {
      console.log("-----------  res----------->", res.data);
    });
  };
  return (
    <div>
      <Button color="danger" onClick={callApi}>
        Get Data
      </Button>
      <Button color="danger" onClick={createUser}>
        Create User
      </Button>
    </div>
  );
}
