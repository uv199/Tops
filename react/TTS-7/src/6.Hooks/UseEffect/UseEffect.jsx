import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function UseEffect() {
  let [count, setCount] = useState(0);
  let [amt, setAmt] = useState(0);

  // without dependancy - call every time
  useEffect(() => {
    console.log("----with out dependancy ------->");
  });

  // with [] dependancy - call only first time
  useEffect(() => {
    console.log("----with [] dependancy ------>");
    setTimeout(() => {
      alert("hwllo world");
    }, 2000);
  }, []);

  // with [count] dependancy - call whencount chnage
  useEffect(() => {
    console.log("----with [count] dependancy ------>");
    // setCount(count + 1); // never set a state which are use as dependancy
  }, [count]);

  // with [count,amt] dependancy - call when count||amt chnage
  useEffect(() => {
    console.log("----with [count,amt] dependancy ------>");
  }, [count, amt]);

  return (
    <div>
      <h1>useEffect</h1>

      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(++count)}>Inc</Button>
      <hr />
      <h1>Amount is {amt}</h1>
      <Button onClick={() => setAmt(++amt)}>Inc</Button>
    </div>
  );
}

let fun = () => {
  console.log("----with [] dependancy ------>");
  return () => {
    console.log("---return func---->");
  };
};
