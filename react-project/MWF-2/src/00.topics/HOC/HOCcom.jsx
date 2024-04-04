import React, { useState } from "react";
import { Button } from "reactstrap";

export default function HOC(Component) {
  return function () {
    let [count, setCount] = useState(0);
    let inc = (x) => {
      setCount(count + x);
    };
    return (
      <>
        <Component num={count} incFun={inc} />
      </>
    );
  };
}




