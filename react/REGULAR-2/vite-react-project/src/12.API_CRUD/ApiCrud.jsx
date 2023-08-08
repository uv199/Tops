import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";

export default function ApiCrud() {
  function callApi() {
    axios({
      method: "get",
      url: "http://localhost:3000/user/getAll",
    })
      .then((res) => {
        console.log("res---->", res);
      })
      .catch((err) => {
        console.log("err--->", err);
      });
  }
  return (
    <>
      <Button onClick={() => callApi()} variant="primary">
        Call Api
      </Button>
    </>
  );
}
