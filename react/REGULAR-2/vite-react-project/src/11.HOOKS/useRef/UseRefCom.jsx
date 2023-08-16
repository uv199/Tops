import React, { useRef } from "react";

export default function UseRefCom() {
  const inputRef = useRef(null);
  const divRef = useRef(null);

  function clickFun(params) {
    inputRef.current.focus();
    inputRef.current.value = inputRef.current.value.toUpperCase();
  }

  function chnageColor(params) {
    divRef.current.style.backgroundColor = "blue";
  }
  return (
    <>
      <h1>UseRefCom</h1>
      <input ref={inputRef} type="text" />
      <button onClick={() => clickFun()}>Click</button>
      <div
        ref={divRef}
        style={{ width: "50px", height: "50px", backgroundColor: "red" }}
      ></div>
      <button onClick={() => chnageColor()}>Change</button>
    </>
  );
}
