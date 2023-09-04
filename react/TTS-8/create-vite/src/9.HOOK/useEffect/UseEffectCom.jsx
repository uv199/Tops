import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function UseEffectCom() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  // call everytime
  useEffect(() => {
    console.log("------useEffect without Depe--------");
  });

  // call only first time not call on update of component
  useEffect(() => {
    console.log("------useEffect with [] array--------");
  }, []);

  // its call when counts value change
  useEffect(() => {
    console.log("------useEffect with depend on count--------");
    // setCount(++count);
  }, [count]);

  // its call when count or count2 value change

  useEffect(() => {
    console.log("------useEffect with depend on count and count 2--------");
  }, [count, count2]);

  return (
    <>
      <h1>UseEffectCom</h1>
      <h1>count is {count}</h1>
      <h1>count 2 is {count2}</h1>
      <Button color="danger" outline onClick={() => setCount(++count)}>
        increment
      </Button>
      <Button color="danger" outline onClick={() => setCount2(++count2)}>
        increment
      </Button>
    </>
  );
}
