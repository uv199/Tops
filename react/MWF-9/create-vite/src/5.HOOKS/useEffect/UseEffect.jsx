import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import PropsUseEffect from "./PropsUseEffect";

export default function UseEffect() {
  let [count, setCount] = useState(0);
  let [amount, setAmount] = useState(0);
  // without dependency like render in class call everytime
  //   useEffect(() => {
  //     console.log("*-----without any dependency-----*");
  //   });

  // with blank arr adependency contructor/ componentDidMount  call 1st time
  //   useEffect(() => {
  //     console.log("**-----with blank arr dependency-----**");
  //   }, []);

  // with dependency of count - call on update of count
  useEffect(() => {
    console.log("***-----with Count dependency-----***");
  }, [count]);

  // with dependency of amount - call on update of amount
  useEffect(() => {
    console.log("***-----with Amount dependency-----***");
    // setAmount(amount + 1);// don't date to do this it's create a infinite loop
  }, [amount]);

  // with both dependency amount and count
  useEffect(() => {
    console.log("****-----with amount, count dependency-----****");
  }, [amount, count]);

  return (
    <>
      <h1>UseEffect</h1>

      <h1>count is {count}</h1>
      <Button color="danger" onClick={() => setCount(count + 1)}>
        INC
      </Button>
      <h1>Amount is {amount}</h1>
      <Button color="danger" onClick={() => setAmount(amount + 1)}>
        INC
      </Button>
      <PropsUseEffect count={count} />
    </>
  );
}
