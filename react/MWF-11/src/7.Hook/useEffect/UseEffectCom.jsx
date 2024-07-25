import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

// useEffect(function,dependency)
export default function UseEffectCom() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  // call every time when any props and any state chnaged
  useEffect(() => {
    // console.log("-------WITHOUT DEPENDENCY------>");
  });

  // call only first time when page render
  useEffect(() => {
    console.log("-------WITH [] DEPENDENCY------>");
  }, []);

  // call first time and also when count chnage
  useEffect(() => {
    console.log("-------WITH [count] DEPENDENCY------>");
  }, [count]);

  // call first time and also when count-2 chnage
  useEffect(() => {
    console.log("-------WITH [count-2] DEPENDENCY------>");
  }, [count2]);

  // call first time and also when count or count-2 change
  useEffect(() => {
    console.log("-------WITH [count, count-2] DEPENDENCY------>");
  }, [count, count2]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Inc</Button>
      <hr />
      <h1>Count-2 is {count2}</h1>
      <Button onClick={() => setCount2(count + 1)}>Inc</Button>
    </div>
  );
}
