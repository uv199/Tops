import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function UseEffectCom() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);
  useEffect(() => {
    console.log("-----with [] dependancy-----");
    alert("--->");
  }, []);

  useEffect(() => {
    console.log("-----with [count] dependancy-----");
    alert("-----count----");
  }, [count]);

  useEffect(() => {
    console.log("-----with [count2] dependancy-----");
  }, [count2]);

  useEffect(() => {
    console.log("-----with [count,count2] dependancy-----");
  }, [count2, count]);

  useEffect(() => {
    console.log("-----with out dependancy-----");
  });
  
  return (
    <div>
      UseEffectCom
      <h1>Count is {count}</h1>
      <Button color="danger" onClick={() => setCount(count + 1)}>
        inc
      </Button>
      <hr />
      <h1>Count-2 is {count2}</h1>
      <Button color="danger" onClick={() => setCount2(count2 + 1)}>
        inc
      </Button>
      <hr />
      <h1>Count-3 is {count3}</h1>
      <Button color="danger" onClick={() => setCount3(count3 + 1)}>
        inc
      </Button>
    </div>
  );
}
