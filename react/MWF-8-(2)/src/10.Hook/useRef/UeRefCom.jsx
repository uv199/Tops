import React, { useEffect, useRef } from "react";
import { Button, Input } from "reactstrap";

export default function UeRefCom() {
  const divRef = useRef();
  const inputRef = useRef();

  const handler = () => {
    divRef.current.style.color = "red";
    divRef.current.innerText = "hello ma'am";
  };

  const inputHandler = () => {
    inputRef.current.placeholder = "Please enter Name";
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="d-flex flex-column w-25 gap-3">
      <div ref={divRef}>
        <h1>Hello world</h1>
      </div>

      <Button onClick={() => handler()}>Chnage Text Color</Button>
      <br />
      <input ref={inputRef} />
      <Button onClick={() => inputHandler()}>placeholder</Button>

      <hr />
    </div>
  );
}
