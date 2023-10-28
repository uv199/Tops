import React, { useState } from "react";
import { Button } from "reactstrap";
import { HOC } from "./Hoc";

function Count({ x, setX }) {
  return (
    <>
      <h1>Count is {x}</h1>
      <Button color="danger" onClick={() => setX(x + 1)}>
        INC
      </Button>
    </>
  );
}

export default HOC(Count);
