import React, { useReducer } from "react";
import { Button } from "reactstrap";

function reducer(state, action, no) {
  console.log("-----------  no----------->", no);
  console.log("-----------  action----------->", action);
  console.log("-----------  state----------->", state);
  console.log("---->");

  if (action === "inc-1") {
    return state + 1;
  } else if (action === "inc-2") {
    return state + 2;
  } else if (action === "inc-5") {
    return state + 5;
  } else if (action === "dec-10") {
    return state - 10;
  } else {
    return state;
  }
}

export default function ReducerCom() {
  let [count, dispatch] = useReducer(reducer, 100);
  return (
    <>
      <h1>Count is {count}</h1>
      <div className="d-flex gap-3">
        {/* TODO -> input ma value and that value pluse in state */}
        <Button color="danger" onClick={() => dispatch("inc-1")}>
          inc-1
        </Button>
        <Button color="danger" onClick={() => dispatch("inc-2")}>
          inc-2
        </Button>
        <Button color="danger" onClick={() => dispatch("inc-5")}>
          inc-5
        </Button>
        <Button color="danger" onClick={() => dispatch("dec-10")}>
          dec-10
        </Button>
      </div>
    </>
  );
}
