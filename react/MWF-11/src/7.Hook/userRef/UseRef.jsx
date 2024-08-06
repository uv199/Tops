import { Button, Input } from "@material-tailwind/react";
import React, { forwardRef, useEffect, useRef } from "react";

const InputRef = forwardRef((props, ref) => {
  return <Input inputRef={ref} {...props} />;
});

export default function UseRef() {
  const inputRef = useRef();
  const inputForRef = useRef();
  const divRef = useRef();
  const clickHandler = () => {
    console.log("-----------  clickHandler----------->");
    // inputRef.current.focus();
    divRef.current.style.backgroundColor = "red";
    divRef.current.style.border = "20px solid blue";
    inputForRef.current.focus();
  };

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);
  return (
    <div>
      <input
        className="border border-black p-2"
        ref={inputRef}
       
      />

      <InputRef  label="UserName" ref={inputForRef} />
      <div
        ref={divRef}
        className="w-[100px] h-[100px] border-2 border-black"
      ></div>
      <Button onClick={() => clickHandler()}>Focus on Input</Button>
    </div>
  );
}
