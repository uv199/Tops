import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function Test(props) {
  console.log("props", props);
  let [no, setNo] = useState(0);

  useEffect(() => {
    let x = props.fun();
    console.log("------>", x);
    setNo(x);
  });

  return (
    <div>
      <h1>Number is {no}</h1>
      <Button onClick={() => setNo(no + 1)}>INc</Button>
    </div>
  );
}
