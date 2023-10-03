import React, { useMemo, useState } from "react";
import { Button } from "reactstrap";

export default function UseMemocom() {
  let [count, setCount] = useState(0);
  let [isBlack, setIsBlack] = useState(true);

  const data = useMemo(
    () => {
      console.log("----->");
      for (let i = 0; i < 1000000000; i++) {}
      return count + 100;
    },
    [count]
  );

  return (
    <>
      <div>
        <h1>UseMemocom</h1>
        <h1>Data is {data || 0}</h1>
        <h1>Count is {count}</h1>

        <Button onClick={() => setCount(++count)}>INC</Button>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: isBlack ? "black" : "lightcoral",
          }}
        ></div>
        <Button onClick={() => setIsBlack(!isBlack)}>CHANGE COLOR</Button>
      </div>
    </>
  );
}
