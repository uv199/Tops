import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

export default function UseEffectPro1() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("only first time");
    setTimeout(() => {
      alert("please login");
    }, 5000);
  }, []);

  useEffect(() => {
    console.log("every time");
  });

  useEffect(() => {
    alert("Count is devided by 5 ");
  }, [count]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Inc</Button>
      <hr />
      <h1>Count-2 is {count2}</h1>
      <Button onClick={() => setCount2(count2 + 1)}>Inc</Button>
    </div>
  );
}
/*

1
1
1
 */
