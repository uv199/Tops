import React from "react";
import HOCFun from "./HigeOrderFun";
import { Button } from "reactstrap";

function ChildHoc2({ count, setCount }) {
  return (
    <div>
      <h1>Amount is {count}</h1>
      <Button onClick={() => setCount(++count)}>Inc</Button>
    </div>
  );
}
export default HOCFun(ChildHoc2);
