import React, { useCallback, useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function UseEffect() {
  let x = 0;
  let [count, setCount] = useState(0);
  let [amount, setAmount] = useState(0);
  useEffect(() => {
    console.log("----use effcet every time----001");
  });

  useEffect(() => {
    console.log("----use effcet only fiest time----002");
  }, []);

  useEffect(() => {
    if (count > 10) {
      alert("now count is greter then 10");
    }
    console.log("----use effcet on update of count----003");
  }, [count]);

  useEffect(() => {
    console.log("----use effcet on update of count and amount----004");
  }, [count, amount]);

  useEffect(() => {
    console.log("----use effcet on update x----005");
  }, [x]);

  const incX = () => {
    x = x + 1;
    console.log("x", x);
  };
  return (
    <>
      <h1>UseEffect</h1>
      <h2>Count is {count}</h2>
      <Button color="danger" onClick={() => setCount(++count)}>
        Inc
      </Button>
      <h2>Amount is {amount}</h2>
      <Button color="danger" onClick={() => setAmount(++amount)}>
        Inc-amount
      </Button>
      <Button color="danger" onClick={() => incX()}>
        Inc-x
      </Button>
    </>
  );
}
