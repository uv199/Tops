import { useAccordion } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function UseEffect() {
  let [count, setCount] = useState(0);
  let [amount, setAmount] = useState(0);

  // call every time when page render and also chnage any propes and state of componenet
  useEffect(() => {
    console.log("----- Use Effect with out dependancy-----");
  });

  // call only first time when page render
  useEffect(() => {
    console.log("----- Use Effect with [] dependancy-----");
  }, []);

  // call when count's value chnage
  useEffect(() => {
    if (count === 5) {
      alert("Count is 5");
    }
    console.log("----- Use Effect with [count] dependancy-----");
  }, [count]);

  // call when count's  or amount's value chnage
  useEffect(() => {
    console.log("----- Use Effect with [count,amount] dependancy-----");
  }, [count, amount]);

  return (
    <div>
      <h1>UseEffect</h1>
      <h2>Count is {count}</h2>
      <Button onClick={() => setCount(count + 1)}>Inc</Button>
      <hr />
      <h2>Amount is {amount}</h2>
      <Button onClick={() => setAmount(amount + 1)}>Inc</Button>
    </div>
  );
}
