import React, { useState, useMemo, useCallback } from "react";
import { Button } from "reactstrap";
import Com from "./Com";

export default function UseMemo() {
  const [isBlack, setIsBlack] = useState(true);
  const [count, setCount] = useState(0);

  // useMemo return a value
  const x = useMemo(() => getX(count), [count]);

  // useCallBack reaturnd a callback function
  const yFun = useCallback(() => {
    console.log("--->");
    for (let i = 0; i < 1000000000; i++) {}
    return [count, count + 1, count + 3];
  }, [count]);

  return (
    <>
      <h1>UseMemo</h1>
      <h1>x is {x}</h1>
      <h1>count is {count}</h1>
      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: isBlack ? "black" : "lightcoral",
        }}
      ></div>
      <Com yFun={yFun} />
      <Button color="danger" onClick={() => setIsBlack(!isBlack)}>
        Change color
      </Button>
      <Button color="danger" onClick={() => setCount(count + 1)}>
        Count++
      </Button>
    </>
  );
}
function getX(count) {
  console.log("--->");
  for (let i = 0; i < 1000000000; i++) {}
  return count + 10;
}
