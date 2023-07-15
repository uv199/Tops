import { functions } from "lodash";
import React, { useState } from "react";

export default function UseSateFun() {
  let [no, setNo] = useState(0);

  function count() {
    setNo(no + 1);
  }
  return (
    <div>
      <h1>{no}</h1>
      <button onClick={() => count()}>click me</button>
    </div>
  );
}
