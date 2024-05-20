import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

// useEffect(function,dependancy)
export default function UseEffectCom() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  // every time when something chnage in page
  useEffect(() => {
    console.log(" use effect with out dependancy");
  });

  // only first time when page render
  useEffect(() => {
    console.log(" use effect with [] dependancy");
  }, []);

  // with dependancy
  useEffect(() => {
    console.log(" use effect with [count] dependancy");
  }, [count]);

  return (
    <div>
      <h1>Hello use Effect</h1>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Inc</Button>
      <hr />
      <h1>Count-2 is {count2}</h1>
      <Button onClick={() => setCount2(count2 + 1)}>Inc</Button>
    </div>
  );
}
