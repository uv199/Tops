import React, { useState } from "react";
import { Button } from "reactstrap";

export default function UseStateFun() {
  // use state
  let [count, setCount] = useState(10);

  let x = 10;
  function incCount() {
    x = x + 10;
    console.log("x", x);
  }

  function incstateCount() {
    console.log("---->");
    setCount(count + 10);
  }
  return (
    <>
      <h1>UseStateFun</h1>
      <h1>count is {x}</h1>
      <Button color="danger" onClick={() => incCount()}>
        Increment
      </Button>
      <h1>state count is {count}</h1>
      <Button color="danger" onClick={() => incstateCount()}>
        Increment-state
      </Button>
    </>
  );
}
