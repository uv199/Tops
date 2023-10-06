import React from "react";
import { Button } from "reactstrap";

export default function PropsChange(props) {
  function changeFun() {
    console.log("------>");
    // props.name = "Shubham"; // can't chnage props value it's just read only
  }
  return (
    <div>
      <h1>Hello world... {props.name}</h1>
      <Button color="danger" onClick={() => changeFun()}>
        Change name
      </Button>
    </div>
  );
}
