import React, { useEffect, useRef } from "react";
import { Button, Input } from "reactstrap";

export default function UseRefCom() {
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const addData = () => {
    console.log("--->");
    // inputRef.current.value = "hello world";
    inputRef.current.focus();
  };

  const chnageColor = () => {
    divRef.current.style.backgroundColor = "yellow";
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      ></div>
      <input type="text" ref={inputRef} />
      <Button color="danger" onClick={addData}>
        Add default name
      </Button>
      <Button color="danger" onClick={chnageColor}>
        chnage color
      </Button>
    </div>
  );
}
