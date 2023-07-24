import React, { useState } from "react";

export default function FunState() {
  let [count, setCount] = useState(0);
  let [test, setTest] = useState("test user state");
  let x = 0;

  function updateCount(params) {
    x++;
  }
  function updateState(params) {
    setCount((pre) => pre + 1); // count= count++
    // setCount(count + 1); // count= count + 1
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
/*\
let x = ""{}[]
let [name, setName] = useState(""/{}/[]/null/undefined/10/true)
name = "test"; // not acceptable
sdetName("test") // you can chnage state value by doing this 
->  our componenet will be re-render When states value chnaged (count)
->  we chnage varibale value -> componennt will never re-render 
*/
