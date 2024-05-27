import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

function reducer(state, action) {
  if (action === "inc-1") {
    return state + 1;
  } else if (action === "dec-1") {
    return state - 1;
  } else if (action === "dec-10") {
    return state - 10;
  } else if (action === "reset") {
    return 0;
  } else {
    return state;
  }
}


export default function UseReducer() {
  let [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => dispatch("inc-1")}>Inc-1</Button>
      <Button onClick={() => dispatch("dec-1")}>Dec-1</Button>
      <Button onClick={() => dispatch("dec-2")}>Dec-2</Button>
      <Button onClick={() => dispatch("dec-10")}>Dec-10</Button>
      <Button onClick={() => dispatch("reset")}>reset</Button>
    </div>
  );
}
