import React, { useRef } from "react";
import { Button } from "reactstrap";

export default function UseRefCom() {
  const inputRef = useRef();
  const divRef = useRef();

  const focusInput = () => {
    // inputRef.current.value = "test";
    inputRef.current.focus();
  };

  const chnageColor = ()=>{
   divRef.current.style.backgroundColor = "red"
  }

  return (
    <div>
      <input type="text" ref={inputRef} className="border shadow-md" />
      <Button onClick={() => focusInput()}>Focus to input</Button>
      <hr />
      <div ref={divRef} className="w-[100px] h-[100px] border"></div>
      <Button onClick={() => chnageColor()}>Focus to input</Button>
    </div>
  );
}
