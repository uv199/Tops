import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handlInc = () => {
    setCount(count + 1);
  };
  const handlDec = () => {
    setCount(count - 1);
  };
  return (
    <div className="text-center">
      <h2>Quantity : {count} </h2>

      <button onClick={handlInc} className="me-3">
        Increment
      </button>
      <button onClick={handlDec}>Decrement</button>
    </div>
  );
}
