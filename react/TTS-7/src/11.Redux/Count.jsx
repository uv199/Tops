import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { increment } from "./redux/countSlice";

export default function Count() {
  let data = useSelector((store) => {
    return store.countSlice;
  });

  // dispatch
  let dispatch = useDispatch();

  return (
    <div>
      <h1>Count is {data.count}</h1>
      <Button onClick={() => dispatch(increment())}>Inc</Button>
    </div>
  );
}
