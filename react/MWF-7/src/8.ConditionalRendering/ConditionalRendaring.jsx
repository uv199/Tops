import React, { useState } from "react";
import { Button } from "reactstrap";

export default function ConditionalRendaring() {
  let [count, setCount] = useState(1);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Inc</Button>
      <hr />
      {count % 2 === 0 ? <h2>Count is Even</h2> : <h2>Count is Odd</h2>}
      <hr  />
    </div>
  );
}
