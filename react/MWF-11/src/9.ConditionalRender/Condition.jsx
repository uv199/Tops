import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

export default function Condition() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Inc</Button>

      <hr />

      {count % 2 == 0 ? <h1>Count is even</h1> : <h1>Count is odd</h1>}
    </div>
  );
}
