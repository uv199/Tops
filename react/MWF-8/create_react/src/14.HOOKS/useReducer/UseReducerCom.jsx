import React, { useReducer } from "react";

let intialVal = 0;
let reducer = (state, method) => {
  switch (method) {
    case "inc":
      return state + 1;
    case "min":
      return state - 1;
    case "reset":
      return 0;
    default:
      break;
  }
};

export default function UseReducerCom() {
  let [count, setCount] = useReducer(reducer, intialVal);
  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={() => setCount("inc")}>inc</button>
      <button onClick={() => setCount("min")}>min</button>
      <button onClick={() => setCount("reset")}>reset</button>
    </>
  );
}
