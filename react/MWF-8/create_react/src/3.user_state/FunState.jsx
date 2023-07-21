import React, { useState } from "react";

export default function FunState() {
  let [count, setCount] = useState(0);
  let [test, setTest] = useState("test user state");
  let x = 0;

  function updateCount(params) {
    x++;
    console.log("🚀 ~ file: FunState.jsx:7 ~ updateCount ~ x:", x);
  }
  function updateState(params) {
    setCount((pre) => pre + 1); // count= count++
    // setCount(count + 1); // count= count + 1
    console.log("🚀 ~ file: FunState.jsx:13 ~ updateState ~ count:", count);
  }

  return (
    <div>
      <h1>{x}</h1>
      <button onClick={() => updateCount()}>count Inc</button>
      <hr />
      <h1>{count}</h1>
      <button onClick={() => updateState()}>count Inc</button>
      <hr />
      <h1>{test}</h1>
    </div>
  );
}
