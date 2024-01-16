import React, { useCallback, useState } from "react";
import Com from "./Com";
import { Button } from "reactstrap";

export default function CallBackCom() {
  let [count, setCount] = useState(0);
  let [isGirl, setisGirl] = useState(true);

  const generateArr = useCallback(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return [count + 1, count + 2, count + 3];
  }, [count]);

  return (
    <div>
      <h1>count is {count}</h1>
      <Button color="danger" onClick={() => setCount(count + 1)}>
        INC
      </Button>
      <Com generateArr={generateArr} />
      <hr />
      <h1>hello {isGirl ? "girl" : "boy"} </h1>
      <Button color="danger" onClick={() => setisGirl(!isGirl)}>
        Chnage gender
      </Button>
    </div>
  );
}

/*

useMemo vs useCallBack 
useCallBack return memoized function
useMemo return memoized value

*/
