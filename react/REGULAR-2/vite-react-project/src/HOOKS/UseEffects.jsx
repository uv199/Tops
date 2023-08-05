import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function UseEffects() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  // call every time
  useEffect(() => {
    console.log("----useEffect-1---->");
  });
  // call first time
  useEffect(() => {
    console.log("----useEffect-2---->");
  }, []);

  // call on count change j-j dependency apso teni value chnage thase to aa use effect call thase
  useEffect(() => {
    console.log("----useEffect-3---->");
    // setCount(count + 1); // j dependency api hoy aa state ne aa use effect ma set karvi nai
    // it will create infinite loop
  }, [count]);

  return (
    <>
      <h1>useEffect</h1>
      <h1>{count}</h1>
      <Button
        className="ms-2"
        onClick={() => setCount(count + 1)}
        variant="primary"
      >
        Add
      </Button>
      <h1>{count2}</h1>
      <Button
        className="ms-2"
        onClick={() => setCount2(count2 + 1)}
        variant="primary"
      >
        Add
      </Button>
    </>
  );
}
