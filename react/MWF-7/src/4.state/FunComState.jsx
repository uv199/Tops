import React, { useState } from "react";
import { Button } from "reactstrap";

let count = { a: 90 };
count = 91;
count = { a: count.a + 1 };

export default function FunComState() {
  // let [ state, method to chnage state] = useState(inital value)
  let [x, setX] = useState(100);
  let [count, setCount] = useState({ a: 90, b: 20 });
  console.log("-----------  count----------->", count);

  function incrementX(params) {
    setX(x + 1);
  }

  const incrementCount = () => {
    console.log("--->");
    // ... for copy old data while state is an object or array
    setCount({ ...count, a: count.a + 1 });
  };

  return (
    <div>
      <h1>X is {x}</h1>
      <Button onClick={() => incrementX()}>X+</Button>
      {/* <Button onClick={incrementX}>X+</Button> */}

      <hr />

      <h1>count-A is {count.a}</h1>
      <Button onClick={() => incrementCount()}>Count-A +</Button>

      <hr />
      <h1>count-B is {count.b}</h1>
      <Button onClick={() => setCount({ ...count, b: count.b + 1 })}>
        Count-B +
      </Button>
    </div>
  );
}
