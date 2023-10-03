import React, { useCallback, useState } from "react";
import { Button } from "reactstrap";
import Test from "./Test";

export default function UseCallBack() {
  const [count, setCount] = useState(0);
  const [isBlack, setIsBlack] = useState(true);

  const dataFun = useCallback(() => {
    console.log("---useCallback-->");
    for (let i = 0; i < 1000000000; i++) {}
    return count + 100 || 100;
  }, [count]);

  return (
    <div>
      <h1>UseCallBack</h1>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>INC</Button>
      <Test fun={dataFun} />
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: isBlack ? "black" : "lightcoral",
        }}
      ></div>
      <Button onClick={() => setIsBlack(!isBlack)}>CHANGE COLOR</Button>
    </div>
  );
}

// Test component remains the same
