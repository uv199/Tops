import { Button } from "@material-tailwind/react";
import React, { useReducer } from "react";

function reducer(state, action) {
  if (action === "set-50") {
    return 50;
  } else if (action === "inc") {
    return state + 1;
  } else {
    return state;
  }
}

export default function UseReducer() {
  let [count, dispatch] = useReducer(reducer, 100);
  console.log("-----------  count----------->", count);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => dispatch("set-50")}>set-50</Button>
      <Button onClick={() => dispatch("inc")}>inc</Button>
      <Button onClick={() => dispatch("dec")}>dec</Button>
    </div>
  );
}
