import React, { useCallback, useState } from "react";
import ListComListCom from "./ListCom";
import { Button } from "react-bootstrap";

export default function UseCallBack() {
  let [count, SetCount] = useState(0);
  let [isBlack, setIsBlack] = useState(true);
  
  const increment = useCallback(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return [count, count + 1, count + 2];
  }, [count]);

  function chnageColour() {
    setIsBlack(!isBlack);
  }
  return (
    <>
      <h1>UseCallBack</h1>
      <h1>{count}</h1>
      <div>
        <h1
          style={{
            color: isBlack ? "white" : "black",
            backgroundColor: isBlack ? "black" : "lightcoral",
            padding: "10px",
          }}
        >
          Hello
        </h1>
      </div>

      <Button className="ms-2" variant="info" onClick={() => chnageColour()}>
        Update
      </Button>
      <Button className="ms-2" variant="info" onClick={() => SetCount(++count)}>
        increment
      </Button>
      <ListComListCom increment={increment} />
    </>
  );
}
