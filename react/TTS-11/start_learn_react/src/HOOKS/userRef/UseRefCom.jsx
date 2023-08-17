import React, { useRef } from "react";

export default function UseRefCom() {
  const inputRef = useRef(null);
  const colorRef = useRef(null);
  function clickHandelr(params) {
    console.log("------clickHandelr------");
    inputRef.current.value = inputRef.current.value + "urvish patel";
    inputRef.current.focus();
  }

  function colorHandler() {
    colorRef.current.style.backgroundColor = "black";
    colorRef.current.style.color = "white";
  }
  return (
    <>
      <h1>UseRefCom</h1>
      <input type="text" ref={inputRef} />
      <button onClick={() => clickHandelr()}>click me </button>
      <div
        ref={colorRef}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      >
        color
      </div>
      <button onClick={() => colorHandler()}>chnage Color</button>
    </>
  );
}
