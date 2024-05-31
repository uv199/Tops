import React, { useReducer } from "react";
import { Button } from "reactstrap";

function reducer(state, action) {
  if (action?.type === "INC") {
    return state + action?.incCount;
  } else {
    return state;
  }
}

export default function UseReducer() {
  let [value, dispatch] = useReducer(reducer, 10);

  /*
  let no = 10;
  let action = "INC";
  let obj = { action: action, incCount: 20 };
  */

  return (
    <div>
      <h1>Count is {value}</h1>
      <Button onClick={() => dispatch({ type: "INC", incCount: 10 })}>
        Increment-10
      </Button>
      <Button onClick={() => dispatch({ type: "INC", incCount: 30 })}>
        Increment-30
      </Button>
      <Button onClick={() => dispatch("INC", 20)}>Decrement</Button>
      <Button>Reset to 100</Button>
    </div>
  );
}

// when you can pass only one thing in any function but you have 2 thing to pass  you can combine that two things in object and pass that object into argument
// +10
// -10
// *10
// reset
