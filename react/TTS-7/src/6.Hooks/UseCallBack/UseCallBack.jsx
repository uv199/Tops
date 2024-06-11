import React, { useCallback, useState } from "react";
import UseCom from "./UseCom";
import { Button } from "reactstrap";

export default function UseCallBack() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState(true);

  //   const generateNum = (params) => {
  //     console.log("Function is called");
  //     for (let i = 0; i < 1000000000; i++) {}
  //     return [count + 1, count + 2];
  //   };

  const generateNum = useCallback(() => {
    return (params) => {
      console.log("Function is called");
      for (let i = 0; i < 1000000000; i++) {}
      return [count + 1, count + 2];
    };
  }, [count]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <UseCom generateNum={generateNum} />
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
