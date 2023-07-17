import React, { useState } from "react";

export default function ConditionalRendaring() {
  let [isShow, setIsShow] = useState(false);

  return (
    <div>
      {isShow ? <h1>yes its true</h1> : <h1>sorry its false</h1>}
      <button> Chnage </button>
    </div>
  );
}
