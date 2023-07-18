import React, { useState } from "react";

export default function ConditionalRen() {
  let [flag, setFlag] = useState(true);
  function chnageName() {
    setFlag(!flag);
  }
  return (
    <div>
      {flag ? <h1>Jalpa</h1> : <h1>Kaushal</h1>}
      <button onClick={() => chnageName()}>Chnage Name</button>
    </div>
  );
}
