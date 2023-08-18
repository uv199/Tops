import React, { useRef } from "react";

export default function UseRefCom() {
  const inputRef = useRef(null);

  function fun() {
    inputRef.current.value = "test--->";
    inputRef.current.focus();
  }
  return (
    <>
      <button onClick={() => fun()}>click me </button>
      name: <input ref={inputRef} type="text" />
    </>
  );
}
