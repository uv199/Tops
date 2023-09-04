import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

export default function UseMemoCom() {
  let [count, setCount] = useState(0);
  let [isBlack, SetIsBlack] = useState(true);

  const data = useMemo(() => {
    console.log("-------> called");
    for (let i = 0; i < 1000000000; i++) {}
    return count * 1000;
  }, [count]);
  return (
    <>
      <h1>{data}</h1>
      <div>
        <h1
          style={{
            color: isBlack ? "white" : "black",
            backgroundColor: isBlack ? "black" : "lightcoral",
            padding: "10px",
          }}
        >
          UseMemo
        </h1>
      </div>

      <Button
        className="ms-2"
        variant="info"
        onClick={() => SetIsBlack(!isBlack)}
      >
        Update
      </Button>
      <Button className="ms-2" variant="info" onClick={() => setCount(++count)}>
        increment
      </Button>
    </>
  );
}

// function countMultiply
