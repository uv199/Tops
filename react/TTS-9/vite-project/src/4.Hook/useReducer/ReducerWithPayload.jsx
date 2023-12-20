import React, { useReducer } from "react";
import { Button } from "reactstrap";

const reducer = (state, action) => {
  if (action.actionType === "INC") {
    return { count: state.count + action?.payload };
  } else if (action.actionType === "DEC") {
  } else {
    return state;
  }
};

export default function ReducerWithPayload() {
  let [count, dispatch] = useReducer(reducer, { count: 1000 });
  // take state

  return (
    <div>
      {/* input set state */}
      <h1>Count is : {count.count}</h1>
      <Button onClick={() => dispatch({ actionType: "INC", payload: 10 })}>
        INC By Number
      </Button>
      <Button onClick={() => dispatch({ actionType: "DEC" })}>
        INC By Number
      </Button>
    </div>
  );
}
