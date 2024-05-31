import React, { useReducer } from "react";
import { Button } from "reactstrap";

function reducer(state, action) {
  if (action === "INC") {
    return state + 1;
  } else if (action === "DEC") {
    return state - 1;
  } else {
    return state;
  }
}

export default function UseReducer() {
  let [value, dispatch] = useReducer(reducer, 10);

  return (
    <div>
      <h1>Count is {value}</h1>
      <Button onClick={() => dispatch("INC")}>Increment</Button>
      <Button onClick={() => dispatch("DEC")}>Decrement</Button>
      <Button onClick={() => dispatch("RESET-0")}>Reset to 0</Button>
      <Button>Reset to 100</Button>
    </div>
  );
}


// +10
// -10
// *10
// reset
