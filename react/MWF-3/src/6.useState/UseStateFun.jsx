import React, { useState } from "react";
import { Button } from "reactstrap";

export default function UseStateFun() {
  let [count, setCount] = useState(100);

  function incHandler() {
    console.log("------>");
    setCount(count + 1);
  }
  return (
    <>
      <h1>UseStateFun</h1>
      <h1> count is {count}</h1>

      <Button color="danger" onClick={() => incHandler()}>
        Inc
      </Button>
      <br />
      <Button color="danger" onClick={() => setCount(count - 1)}>
        Dec
      </Button>
    </>
  );
}
