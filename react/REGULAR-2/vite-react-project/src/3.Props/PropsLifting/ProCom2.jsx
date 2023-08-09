import React, { useState } from "react";

export default function ProCom2(props) {
  const [x, setX] = useState(90);
  function pass() {
    props.setage(x);
  }
  1

  return (
    <>
      <h1>ProCom-2</h1>
      <button onClick={() => pass()}>pass data</button>
    </>
  );
}
