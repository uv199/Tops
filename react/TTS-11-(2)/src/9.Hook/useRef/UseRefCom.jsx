import React, { useEffect, useRef } from "react";
import { Button } from "reactstrap";

export default function UseRefCom() {
  const divRef = useRef();

  const inputRef = useRef();

  const handler = () => {
    const postNode = document.createElement("p");
    postNode.innerText = "This post is appended!";
    divRef.current.appendChild(postNode);
    divRef.current.style.color = "red";
    divRef.current.style.backgroundColor = "yellow";
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>UseRefCom</h1>
      <div
        ref={divRef}
        className="d-flex justify-content-center align-items-center"
        style={{ width: "150px", height: "150px", border: "1px solid black" }}
      >
        <h5>Hello world</h5>
      </div>
      <Button onClick={() => handler()}>Change Color</Button>

      <hr />
      <input ref={inputRef} />
    </div>
  );
}
