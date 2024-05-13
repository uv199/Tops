import React, { useState } from "react";
import { Button } from "reactstrap";

export default function ConditonalCom() {
  let [age, setAge] = useState(50);
  let [count, setCount] = useState(1);

  const incCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>User age is {age}</h1>
      {age > 18 ? (
        <h1>User is above 18 so he allow to drink</h1>
      ) : (
        <h1>User is below 18 so he does not allow to drink</h1>
      )}

      <hr />

      <h1>
        Counter is <span className="text-red-400">{count}</span>
      </h1>
      {count % 2 === 0 ? <h1>counter is even</h1> : <h1>counter is odd</h1>}

      <Button color="danger" onClick={() => incCount()}>
        Inc
      </Button>
    </div>
  );
}
