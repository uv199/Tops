import React, { useEffect, useRef } from "react";

export default function UseRef() {
  const inputRef = useRef();
  const headRef = useRef();
  const addDataFun = () => {
    inputRef.current.value = "hello test";
  };
  useEffect(() => {
    inputRef?.current?.focus?.();
  }, [inputRef]);

  useEffect(() => {
    headRef.current.innerHTML = "hello world";
  }, [headRef]);

  const colorChange = () => {
    headRef.current.style.color = "red";
  };
  return (
    <>
      <h1>UseRef</h1>
      <h1 ref={headRef}></h1>
      <label htmlFor="input">input</label>
      <input ref={inputRef} type="text" id="input" />
      <button onClick={addDataFun}>add data</button>
      <button onClick={colorChange}>chnage color</button>
    </>
  );
}
