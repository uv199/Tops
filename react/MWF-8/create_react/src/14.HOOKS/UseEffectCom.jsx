import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function UseEffectCom() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("-----1------");
  });
  useEffect(() => {
    console.log("-----2------");
  }, []);
  useEffect(() => {
    console.log("-----3------");
    
    // setCount(count + 1);
  }, [count]);

  // count update
  function inc(params) {
    setCount(count + 1);
  }
  function inc2(params) {
    setCount2(count2 + 1);
  }

  return (
    <>
      <h1>Use Effect</h1>
      <h1>{count}</h1>
      <Button className="ms-2" variant="info" onClick={() => inc()}>
        inc
      </Button>
      <h2>count-2</h2>
      <h1>{count2}</h1>
      <Button className="ms-2" variant="info" onClick={() => inc2()}>
        inc-2
      </Button>
    </>
  );
}
