import { CloudFog } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "reactstrap";
import "./index.css";

export default function UseRefCom() {
  const inputRef = useRef();
  const divRef = useRef();
  const div2Ref = useRef();

  const focusHandler = () => {
    inputRef.current.focus();
    inputRef.current.value = "hello user";
    inputRef.current.type = "password";
  };

  const chnageColor = () => {
    divRef.current.style.backgroundColor = "red";
  };

  const chnageshape = () => {
    if (div2Ref.current.className === "rectangle") {
      div2Ref.current.className = "round";
    } else {
      div2Ref.current.className = "rectangle";
    }
  };
  return (
    <div className="useRef">
      <input className="border" type="text" ref={inputRef} />
      <Button onClick={focusHandler}>Focus</Button>
      <hr />
      <div
        className="w-[100px] h-[100px] border border-black"
        ref={divRef}
      ></div>
      <Button onClick={chnageColor}>Change Color</Button>
      <hr />
      <div className="round" ref={div2Ref}></div>
      <Button onClick={chnageshape}>Change shape</Button>
    </div>
  );
}
