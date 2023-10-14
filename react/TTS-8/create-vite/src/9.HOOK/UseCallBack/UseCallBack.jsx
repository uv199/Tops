import React, { useCallback, useState } from "react";
import { Button } from "reactstrap";
import Card from "./Card";

export default function UseCallBack() {
  let [count, setCount] = useState(0);
  let [isBlack, setIsBlack] = useState(true);

  const fun = useCallback(() => {
    console.log("----->");
    for (let i = 0; i < 1000000000; i++) {}
    return [count + 1, count + 2, count + 3];
  }, [count]);

  //   let fun = () => {
  //     console.log("----->");0
  //     for (let i = 0; i < 1000000000; i++) {}
  //     return [count + 1, count + 2, count + 3];
  //   };

  return (
    <>
      <div>
        {/* <h1>Use-CallBack</h1> */}
        <h1>Count is {count}</h1>
        <Button onClick={() => setCount(++count)}>INC</Button>
        <Card fun={fun} />
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
