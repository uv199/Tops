import React, { useMemo, useState } from "react";
import { Button } from "reactstrap";

export default function UserMemo() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState(true);

  function generateNum(params) {
    console.log("Function is called");
    for (let i = 0; i < 1000000000; i++) {}
    return [count + 1, count + 2];
  }
  // let number = generateNum();
  let number = useMemo(() => {
    return generateNum();
  }, [count]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <h2>Coun + 1 = {number[0]}</h2>
      <h2>Coun + 2 = {number[1]}</h2>
      <Button onClick={() => setCount(count + 1)}>Inc</Button>
      <hr />
      <div
        className="w-[100px] h-[100px]"
        style={{ backgroundColor: color ? "red" : "black" }}
      ></div>
      <Button onClick={() => setColor(!color)}>Chnage Color</Button>
    </div>
  );
}
