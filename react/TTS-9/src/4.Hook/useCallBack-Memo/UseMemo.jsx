import React, { useEffect, useMemo, useState } from "react";
import { Button } from "reactstrap";
function fun(count) {
  console.log("---generateArr--->");
  for (let i = 0; i < 1000000000; i++) {}
  let arr = [count, count + 1, count + 2];
  return arr;
}
export default function UseMemo() {
  let [count, setCount] = useState(0);
  let [amount, setAmount] = useState(0);

  let next3NumberArr = useMemo(() => {
    return fun(count);
  }, [count]);

  //   let next3NumberArr = useMemo(() => {
  //     console.log("---generateArr--->");
  //     for (let i = 0; i < 1000000000; i++) {}
  //     let arr = [count, count + 1, count + 2];
  //     return arr;
  //   }, [count]);

  //   console.log("-----------  next3NumberArr----------->", next3NumberArr);
  return (
    <div>
      <h3>number = {next3NumberArr[0]}</h3>
      <h3>number + 1 = {next3NumberArr[1]}</h3>
      <h3>number + 2 = {next3NumberArr[2]}</h3>
      <hr />
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Inc</Button>
      <hr />
      <h1>Amount is {amount}</h1>
      <Button onClick={() => setAmount(amount + 1)}>Inc</Button>
    </div>
  );
}

/*
export default function UseCallBack() {
  let [count, setCount] = useState(0);
  let [amount, setAmount] = useState(0);

  const generateArr = () => {
    console.log("---generateArr--->");
    for (let i = 0; i < 1000000000; i++) {}
    let arr = [count, count + 1, count + 2];
    return arr;
  };

    // let next3NumberArr = generateArr();
  let next3NumberArr = useMemo(generateArr, [count]);

  //   console.log("-----------  next3NumberArr----------->", next3NumberArr);
  return (
    <div>
      <h3>number = {next3NumberArr[0]}</h3>
      <h3>number + 1 = {next3NumberArr[1]}</h3>
      <h3>number + 2 = {next3NumberArr[2]}</h3>
      <hr />
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Inc</Button>
      <hr />
      <h1>Amount is {amount}</h1>
      <Button onClick={() => setAmount(amount + 1)}>Inc</Button>
    </div>
  );
}
*/
