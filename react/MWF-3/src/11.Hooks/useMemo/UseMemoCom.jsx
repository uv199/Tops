import { PlusCircle } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "reactstrap";

export default function UseMemoCom() {
  let [count, setCount] = useState(0);
  let [amount, setAmount] = useState(0);

  let arrayGenerate = () => {
    console.log("------arrayGenerate------");
    for (let i = 0; i < 1000000000; i++) {}
    return [count + 1, count + 2, count + 3];
  };
  let arr = useMemo(() => {
    return arrayGenerate(count);
  }, [count]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button color="danger" onClick={() => setCount(++count)}>
        <PlusCircle />
      </Button>
      <hr />
      <h2>count+1 = {arr[0]}</h2>
      <h2>count+2 = {arr[1]}</h2>
      <h2>count+3 = {arr[2]}</h2>
      <hr />
      <h1>Amount is {amount}</h1>
      <Button color="danger" onClick={() => setAmount(++amount)}>
        <PlusCircle />
      </Button>
    </div>
  );
}
