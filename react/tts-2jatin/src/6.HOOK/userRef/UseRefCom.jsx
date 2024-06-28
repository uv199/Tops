import { Button } from "@material-tailwind/react";
import React, { useEffect, useRef } from "react";

export default function UseRefCom() {
  let divRef = useRef();
  let inputRef = useRef();

  const chnageColorHandler = () => {
    divRef.current.style.backgroundColor = "red";
  };

  const focusInput = () => {
    console.log("first");
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.value = "test@test.com";
  }, []);

  return (
    <div>
      <div ref={divRef} className="border border-black w-[100px] h-[100px]">
        <h1>Hello world</h1>
      </div>
      <Button onClick={() => chnageColorHandler()} className="mt-2">
        Chnage color
      </Button>
      <br />
      <input
        ref={inputRef}
        type="text"
        className="mt-3 py-1 px-4 border border-black"
        placeholder="please enter name"
      />
      <br />
      <Button onClick={() => focusInput()} className="mt-2">
        Chnage color
      </Button>
    </div>
  );
}
