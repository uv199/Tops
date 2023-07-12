import React, { useState } from "react";

function Fun() {
  let a = 0;
  const [Count, setCount] = useState(0);
  function f2() {
    setCount(Count + 1);
    console.log("Count :", Count);
  }
  function f() {
    a = 10;
    console.log("a :", a);
  }
  return (
    <div>
      <div onClick={() => f()}>head{a}</div>;
      <div onClick={() => f2()}>head{Count}</div>;
    </div>
  );
}

export default Fun;
