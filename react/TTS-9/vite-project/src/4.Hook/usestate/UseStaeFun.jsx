import React, { useState } from "react";
import { Button } from "reactstrap";

export default function UseStaeCom() {
  let [count, setCount] = useState(100);

  /*
  x = count
  setcount = "="  // method
  useState(100) = 100 is intial value
*/
  let x = 0;

  const incrementCount = () => {
    x += 1;
    console.log("x", x);
    setCount(count + 1);
    console.log("count", count);
  };
  return (
    <div>
      <h1>X is {x}</h1>
      <h1>count is {count}</h1>
      <Button color="danger" onClick={() => incrementCount()}>
        Inc
      </Button>
      {/* <Button color="danger" onClick={incrementCount}>Inc</Button> */}
    </div>
  );
}
