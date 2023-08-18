import React, { useReducer } from "react";

let initialValue = 0;
let reducer = (state, action) => {
  switch (action.method) {
    case "inc":
      return state + action?.x;
    case "min":
      return state - action?.x;
    case "reset":
      return 0;
    case "inc+5":
      return state + action?.x;
    case "min-5":
      return state - action?.x;
    default:
      break;
  }
};

export default function UseRedCom2() {
  let [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <h1>count : {count}</h1>
      <div className="d-flex gap-2">
        <button onClick={() => dispatch({ method: "inc", x: 1 })}>inc</button>
        <button onClick={() => dispatch({ method: "min", x: 1 })}>min</button>
        <button onClick={() => dispatch({ method: "reset", x: 0 })}>
          reset
        </button>
        <button onClick={() => dispatch({ method: "inc+5", x: 15 })}>
          inc+5
        </button>
        <button onClick={() => dispatch({ method: "min-5", x: 5 })}>
          min-5
        </button>
      </div>
    </>
  );
}
