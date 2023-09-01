import React, { useCallback, useMemo, useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

export default function UseCallBack() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState({
    backGroundColor: "white",
    color: "black",
    height: "100px",
    width: "100px",
  });

  let dCount = useCallback(() => {
    // console.log("---->s");
    // for (let i = 0; i < 1000000000; i++) {}
    // return count * 2;
    return pluse(0);
  }, [count]);
  let abc = dCount();
  useEffect(() => {
    console.log("----> chnage count");
  }, [count]);

  return (
    <>
      <h1>{abc}</h1>
      <h1>{count}</h1>
      <div style={color}>hello</div>
      <Button className="mb-5" onClick={() => setCount(++count)}>
        counter inc
      </Button>
      <Button
        onClick={() =>
          setColor({
            backgroundColor: "black",
            color: "white",
            height: "100px",
            width: "100px",
          })
        }
      >
        theam Chnage
      </Button>
    </>
  );
}
function pluse(count) {
  console.log("---->s");
  for (let i = 0; i < 1000000000; i++) {}
  return count * 2;
}
