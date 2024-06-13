import React, { useMemo, useState } from "react";
import { Button } from "reactstrap";

export default function UseMemo() {
  let [count, setCount] = useState(1);
  let [color, setColor] = useState(true);
  function returnArr(params) {
    console.log("function called");
    for (let i = 0; i < 1000000000; i++) {}
    return [count + 1, count + 2, count + 3];
  }

    // const data = returnArr();
  const data = useMemo(() => {
    return returnArr();
  }, [count]);

  return (
    <div>
      <h1>No = {count}</h1>
      <h1>No+1 = {data[0]}</h1>
      <h1>No+2 = {data[1]}</h1>
      <h1>No+3 = {data[2]}</h1>
      <Button onClick={() => setCount(count + 1)}>Inc-count</Button>
      <hr />
      <div
        className="w-[100px] h-[100px]"
        style={{ backgroundColor: color ? "red" : "black" }}
      ></div>
      <Button onClick={() => setColor(!color)}>Change color</Button>
    </div>
  );
}
