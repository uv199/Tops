import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import UseEffectRemove from "./useEffectRemove";

export default function UseEffectPro1() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  useEffect(() => {
    if (count % 5 === 0 && count !== 0) {
      alert(`count is ${count}`);
    }
  }, [count]);

  useEffect(() => {
    setTimeout(() => {
      alert("youb spend 6 sec in web");
    }, 6000);
  }, []);

  useEffect(() => {
    if (count === count2) {
      alert("both are same");
    }
  }, [count, count2]);

  return (
    <div>
      {count < 4 ? <UseEffectRemove /> : null}
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(++count)}>Count++</Button>
      <hr />
      <h2>Count2 is {count2}</h2>
      <Button onClick={() => setCount2(++count2)}>Count-2++</Button>
    </div>
  );
}
