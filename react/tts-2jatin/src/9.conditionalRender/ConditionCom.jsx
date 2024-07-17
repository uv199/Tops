import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

export default function ConditionCom() {
  let [no, setNo] = useState(1);
  return (
    <div>
      {
        // condition ? true : false
        no % 2 === 0 ? <h1>{no} is even</h1> : <h1>{no} is odd</h1>
      }
      <Button onClick={() => setNo(no + 1)}>Inc</Button>
    </div>
  );
}
