import React, { useState } from "react";
import { Button } from "reactstrap";

export default function FunState() {
  let [count, setCount] = useState(0);
  let [amount, setAmount] = useState({ amount: 200, number: 600 });

  const incCount = () => {
    setCount((lastVal) => lastVal + 1);
  };
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={incCount}>INC</Button>
      {/* <Button onClick={() => incCount()}>INC</Button> */}
      <hr />

      <h1>Amount is {amount.amount}</h1>
      <Button
        onClick={() => setAmount({ ...amount, amount: amount.amount + 1 })}
      >
        INC
      </Button>
      <hr />
      <h1>Number is {amount.number}</h1>
      <Button
        onClick={() => setAmount({ ...amount, number: amount.number + 1 })}
      >
        INC
      </Button>
    </div>
  );
}

/*
let x = 0
x = 500

let = useState 
x = count
= = setCount
0 = userstate(0)


setCount(500)



*/
