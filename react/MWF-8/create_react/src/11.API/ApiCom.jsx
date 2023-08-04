import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function ApiCom() {
  function fun(params) {
    console.log("---->");

    axios
      .get("https://jsonplaceholder.typicode.com/posts/8")
      .then((res) => {
        console.log("res---->", res);
      })
      .catch((err) => {
        console.log(" err:", err);
        alert("Error");
      });
  }
  return (
    <>
      <Button className="mt-2" onClick={() => fun()} variant="success">
        Call API
      </Button>
    </>
  );
}
