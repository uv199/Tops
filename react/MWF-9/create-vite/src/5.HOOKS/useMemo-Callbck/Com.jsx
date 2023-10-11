import React, { useEffect, useState } from "react";

export default function Com({ yFun }) {
  let [amt, setAmt] = useState(0);
  useEffect(() => {
    console.log("--->useEff ct");
    const x = yFun();
    console.log("x", x);
    setAmt(x);
  }, [yFun]);
  return (
    <div>
      <h1>count is {amt[0]}</h1>
      <h1>count after 1 is {amt[1]}</h1>
      <h1>count after 2 is {amt[2]}</h1>

    </div>
  );
}
