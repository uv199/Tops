import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import PropsUseEffect from "./PropsUseEffect";

export default function UseEfectCom() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  // call every time
  //   useEffect(() => {
  //     console.log("-----WITHOUT DEPENDENCY--- ");
  //   });

  //
  useEffect(() => {
    console.log("-----WITH BLANCK ARRAY DEPENDENCY--- ");
  }, []);

  useEffect(() => {
    console.log("-----WITH COUNT-1 DEPENDENCY--- ");
    // if (count % 5 === 0 && count !== 0) {
    //   alert(`count-1 is ${count}`);
    // }
  }, [count]);

  useEffect(() => {
    console.log("-----WITH COUNT-1 AND COUNT-2 DEPENDENCY--- ");
  }, [count, count2]);

  useEffect(() => {
    console.log("-----WITH COUNT-2 DEPENDENCY--- ");
    // if (count2 % 2 === 0 && count2 !== 0) {
    //   alert(`count-2 is ${count2}`);
    // }
  }, [count2]);
  // setTimeout()

  return (
    <>
      <h1>USEEFFECT</h1>
      <hr style={{ width: "100vw", color: "black " }} />
      <h1>COUNT is {count}</h1>
      <Button color="danger" onClick={() => setCount(count + 1)}>
        INC-COUNT
      </Button>
      <hr style={{ width: "100vw", color: "black " }} />
      <h1>COUNT-2 is {count2}</h1>
      <Button color="danger" onClick={() => setCount2(count2 + 1)}>
        INC-COUNT
      </Button>

      <PropsUseEffect count={count} />
    </>
  );
}
