import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function UseEffectCom() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  // call every time
  useEffect(() => {
    // body
    console.log("-----useEffect-1------");
  });

  // call only first time
  useEffect(() => {
    // body
    console.log("-----useEffect-2------");
  }, []);

  useEffect(() => {
    // body
    console.log("-----useEffect-3------");
    // setCount(count + 1); // make infinite call
  }, [count]);

  // inc
  function inc(params) {
    setCount(count + 1);
  }
  function inc2(params) {
    setCount2(count2 + 1);
  }

  return (
    <>
      <h1>user-Effect</h1>
      <h1>{count}</h1>
      <Button onClick={() => inc()} variant="primary">
        Add
      </Button>

      <h1>{count2}</h1>
      <Button onClick={() => inc2()} variant="primary">
        Add-2
      </Button>
    </>
  );
}
