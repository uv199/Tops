import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function ProjectUseEffect() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      alert("Please login");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Inc</Button>
    </div>
  );
}
