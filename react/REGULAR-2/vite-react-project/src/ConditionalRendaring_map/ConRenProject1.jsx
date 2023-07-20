import React, { useState } from "react";

export default function ConRenProject1() {
  let [isEmail, setIsEmail] = useState(true);

  function addEmail(params) {
    setIsEmail(true);
  }

  function addNumber(params) {
    setIsEmail(false);
  }

  function select(params) {
    console.log("========>");
  }
  return (
    <div>
      <button onClick={() => addEmail()}>Enter Email</button>
      <button onClick={() => addNumber()}>Enter Number</button>
      {isEmail ? (
        <input type="email" placeholder="Please enter Email" />
      ) : (
        <input type="number" placeholder="Please enter Number" />
      )}
    </div>
  );
}
