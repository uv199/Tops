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

let obj = {
  title: "zara update",
  description:
    "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
  brand: "Zara",
  gender: "female", //radio
  price: 120,
  thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
  discountPercentage: 15.6, //range
  category: ["formal", "casual", "shose"], // select multi
  color: ["red", "black", "white"], // multi checkbox
  size: ["42", "43"], // multi chekbox
};
