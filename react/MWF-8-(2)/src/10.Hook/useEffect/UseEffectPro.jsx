import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

export default function UseEffectPro() {
  let [count, setCount] = useState(1);
  let [amount, setAmount] = useState(1);
  let [point, setPoint] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      toast.info("Hello User..");
    }, 3000);
  }, []);

  useEffect(() => {
    if (count % 3 === 0) {
      toast.info("Count can devided by 3 ");
    }
  }, [count]);

  useEffect(() => {
    if (count % 5 === 0 || amount % 10 === 0) {
      setPoint(++point);
    }
  }, [amount, count]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button color="danger" onClick={() => setCount(++count)}>
        Inc
      </Button>
      <hr />
      <h1>Amount is {amount}</h1>
      <Button onClick={() => setAmount(++amount)}>Inc-Amount</Button>
      <hr />

      <h1>Point is {point}</h1>
    </div>
  );
}
