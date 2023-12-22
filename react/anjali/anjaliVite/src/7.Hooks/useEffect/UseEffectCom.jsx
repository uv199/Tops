import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function UseEffectCom() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  // WITH OUT DEPENDANCYB - CALL EVERYTIME
  useEffect(() => {
    console.log("--- WITH OUT DEPENDANCYB--->");
  });

  // WITH [] DEPENDANCY - CALL ONLY FIRST TIME
  useEffect(() => {
    console.log("---WITH [] DEPENDANCY--->");
  }, []);

  // WITH DEPENDANCY - UPDATE WHEN COUNT WILL UPDATE
  useEffect(() => {
    console.log("---WITH COUNT DEPENDANCY--->");
  }, [count]);

  // WITH DEPENDANCY - UPDATE WHEN COUNT-2 WILL UPDATE
  useEffect(() => {
    console.log("---WITH COUNT-2 DEPENDANCY--->");
  }, [count2]);

  useEffect(()=>{
    console.log("---WITH COUNT & COUNT-2 DEPENDANCY--->");
  },[count,count2])

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(++count)}>Count++</Button>
      <hr />

      <h1>Count-2 is {count2}</h1>
      <Button onClick={() => setCount2(++count2)}>Count++</Button>
    </div>
  );
}
