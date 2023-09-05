import { Button } from "reactstrap";
import React, { useMemo, useState } from "react";

export default function UseMemo() {
  let [count, setCount] = useState(0);
  const [isBlack, setIsBlack] = useState(false);

  let x = useMemo(() => {
    console.log("------>");
    for (let i = 0; i < 1000000000; i++) {}
    return count * 1000;
  }, [count]);

  function changeColor() {
    setIsBlack(!isBlack);
  }

  return (
    <>
      <h1>{count}</h1>
      <div
        style={{
          color: isBlack ? "white" : "black",
          backgroundColor: !isBlack ? "white" : "black",
          height: "100px",
          width: "100px",
        }}
      >
        <h1>{x}</h1>
      </div>
      <h1>UseMemo</h1>
      <Button color="primary" outline onClick={() => setCount(++count)}>
        primary
      </Button>
      <Button color="primary" outline onClick={() => changeColor()}>
        change color
      </Button>
    </>
  );
}
