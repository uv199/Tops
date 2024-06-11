import React, { useState } from "react";

export default function FunctionalState() {
  // let [state,setState Method] = userState(intialValue)
  let [count, setCount] = useState(100);
  // let count = 100

  const incremenetCount = () => {
    // count = 100 + 1; // we can not chnage state value diractly you must use setState method for update state value
    setCount(count + 1);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Count is {count}</h1>
      <button
        className="border border-black px-3 py-1"
        onClick={() => incremenetCount()}
      >
        Increment Count
      </button>
      <button
        className="border border-black px-3 py-1"
        onClick={() => setCount(count - 1)}
      >
        Decrement Count
      </button>
    </div>
  );
}
