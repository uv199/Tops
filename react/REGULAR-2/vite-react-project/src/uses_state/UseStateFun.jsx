import React, { useState } from "react";
import "./usestatefun.css";

export default function UseStateFun() {
  let [count, setCount] = useState(0);

  // let [a, setA] = useState(0);

  // step 1 only for understand why we use usestate
  let x = 0;
  // step 2 call this functin on click of onlick method
  function inc(params) {
    x++;
    // console.log("x:", x);
  }

  function incCount(params) {
    console.log("-------", count);
    // count = count++;
    setCount(count + 1); // count = count+1
  }

  return (
    <div>
      <h1 className="count">{x}</h1>
      <button onClick={() => inc()}>increment</button>
      <hr />

      {/* -------------------use state ------------------------- */}
      <h1 className="count">{count}</h1>
      <button onClick={() => incCount()}>increment</button>
    </div>
  );
}
