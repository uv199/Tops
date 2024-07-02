import React from "react";

export default function FunctionCom() {
  function clickMe() {
    console.log("----btn clicked----");
  }
  return (
    <div className="fun_com">
      <h1>FunctionCom</h1>
      <button onClick={clickMe}>Click me</button>
      <button onClick={() => clickMe()}>Click me</button>
      <input type="text" onChange={() => console.log("----change--->")} />
    </div>
  );
}
