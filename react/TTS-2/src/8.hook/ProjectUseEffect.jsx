import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function ProjectUseEffect() {
  let [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      alert("Please login");
    }, 3000);
  }, []);

  useEffect(() => {
    if (count % 5 === 0) {
      alert("hello world");
    }
  }, [count]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Inc</Button>
    </div>
  );
}
