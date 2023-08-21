import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
let intialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dic":
      return state - 1;
    case "reset":
      return 0;

    default:
      break;
  }
};

export default function UseReducer() {
  let [count, dispatch] = useReducer(reducer, intialValue);
  return (
    <>
      <h1>count : {count}</h1>
      <Button variant="primary" onClick={() => dispatch("inc")}>
        Increment
      </Button>{" "}
      <Button variant="primary" onClick={() => dispatch("dic")}>
        Decrement
      </Button>{" "}
      <Button variant="primary" onClick={() => dispatch("reset")}>
        Reset
      </Button>
    </>
  );
}
