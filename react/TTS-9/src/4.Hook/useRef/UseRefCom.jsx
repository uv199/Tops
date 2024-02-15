import React, { useEffect, useRef } from "react";
import { Button, Input } from "reactstrap";

export default function UseRefCom() {
  const divRef = useRef(null);
  const inputRef = useRef(null);

  const changeColor = () => {
    divRef.current.style.backgroundColor = "black";
    divRef.current.style.color = "white";
    divRef.current.innerText = "hello";
    inputRef.current.value = "please search here";
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div
        className="mt-5 mb-2"
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
        ref={divRef}
      ></div>
      <input ref={inputRef} className="w-25 mb-2" />
      <Button onClick={changeColor}>Change Color</Button>
    </>
  );
}
