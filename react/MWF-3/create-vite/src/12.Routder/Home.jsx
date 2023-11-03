import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function Home() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("----->");
    setTimeout(() => {
      alert("hello world");
    }, 2000);
  }, []);
  useEffect(() => {
    alert(`count is ${count}`);
  }, [count]);
  return (
    <>
      <div>
        <h1>Home</h1>
        <h3>Count is {count}</h3>
        <Button color="danger" onClick={() => setCount(count + 1)}>
          INC
        </Button>
      </div>
    </>
  );
}
