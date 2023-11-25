import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./Redux/fetures/count/count";

export default function Count() {
  const count = useSelector((state) => {
    return state.COUNT.count;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={() => dispatch(inc())}>INC</Button>
      <Button onClick={() => dispatch(dec())}>Dec</Button>
    </div>
  );
}
