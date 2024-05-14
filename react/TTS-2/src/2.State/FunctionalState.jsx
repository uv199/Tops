import React, { useState } from "react";

export default function FunctionalState() {
  let [x, setX] = useState(1001);
  let [count, setCount] = useState({ a: 10 });
  console.log("-----------  count----------->", count);

  const incrementCount = () => {
    setX(x + 1);
    console.log("-----------  x----------->", x);
  };

  const incrementCountA = () => {
    console.log("-----------  count----------->");
    setCount({ a: count.a + 1 });
  };

  return (
    <div>
      <h1>Count is {x}</h1>
      <button onClick={() => incrementCount()}>Inc</button>

      <hr />
      <h1>CounA is {count.a}</h1>
      <button onClick={() => incrementCountA()}>Inc-A</button>
    </div>
  );
}

/*
export default function FunctionalState() {  

  let x = 100;
  const incrementCount = () => {
    x++;
    console.log("-----------  x----------->", x);
  };

  return (
    <div>
      <h1>Count is {x}</h1>
      <button onClick={() => incrementCount()}>Inc</button>
    </div>
  );
}
*/
