import React, { useReducer } from "react";
import { Button } from "reactstrap";

function reducer(state, action) {
  if (action === "INC-1") {
    return state + 1;
  } else if (action === "DEC-1") {
    return state - 1;
  } else if (action === "INC-10") {
    return state + 10;
  } else {
    return state;
  }
}

export default function UseReducer() {
  //  let [state,dispatch] = useReducer(reducer function,intial value)
  let [count, dispatch] = useReducer(reducer, 0);
  console.log("-----------  count----------->", count);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => dispatch("INC-1")}>Increment - 1</Button>
      <Button onClick={() => dispatch("DEC-1")}>Decrement - 1</Button>
      <Button onClick={() => dispatch("INC-10")}>Increment - 10</Button>
    </div>
  );
}
