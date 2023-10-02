import React from "react";
import { Button } from "reactstrap";

export default function FunProps(props) {
  console.log("props", props);

  function changePro(params) {
    props.name = "monu";
  }

  return (
    <>
      <h1>My name is {props.name}</h1>
      <h1>My age is {props.age}</h1>
      <Button color="danger" onClick={() => changePro()}>
        Change props
      </Button>
    </>
  );
}
