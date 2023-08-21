import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
let intialValue = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + action.x };
    case "dic":
      return { count: state.count - action.x };
    case "reset":
      return { count: 0 };
    default:
      break;
  }
};
export default function UseReducer2() {
  let [count, dispatch] = useReducer(reducer, intialValue);
  return (
    <>
      <h1>count : {count.count}</h1>
      <Button
        variant="primary"
        onClick={() => dispatch({ type: "inc", x: 10 })}
      >
        Increment
      </Button>{" "}
      <Button variant="primary" onClick={() => dispatch({ type: "dic", x: 5 })}>
        Decrement
      </Button>{" "}
      <Button variant="primary" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </Button>
    </>
  );
}

// count={count:0}
// count.count
// return 10+5
// count = 15
// count.count
