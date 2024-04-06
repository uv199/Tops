import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function EffectTask() {
  let [count, setCount] = useState(0);
  let [amt, setAmt] = useState(0);
  let [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      const id = setInterval(() => {
        let ans = confirm("Are you sure..?");
        if (ans) {
          setLogin(true);
          clearInterval(id);
        }
      }, 3000);
    }
    return () => {
      clearInterval(true);
    };
  }, [isLogin]);

  useEffect(() => {
    if (count % 5 === 0 && count !== 0) {
      setAmt(++amt);
      alert("Count is multi by 5");
    }
  }, [count]);

  useEffect(() => {
    if (count === amt && amt !== 0) {
      alert("Both are same");
    }
  }, [count, amt]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(++count)}>Inc</Button>
      <hr />
      <h1>Amount is {amt}</h1>
      <Button onClick={() => setAmt(++amt)}>Inc</Button>

      <hr />
      <h1>{isLogin ? "Login" : "Logout"}</h1>
      <Button onClick={() => setLogin(false)}>Logout</Button>
    </div>
  );
}
