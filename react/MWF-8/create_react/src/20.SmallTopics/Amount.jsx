import { Button } from "reactstrap";
import React, { useState } from "react";
import { HOC } from "./Hoc";

function Amount(props) {
  console.log("props", props);
  return (
    <>
      <h1>Amount is {props.x}</h1>
      <Button color="danger" onClick={() => props.setX(props.x + 1)}>
        INC
      </Button>
    </>
  );
}

export default HOC(Amount);
