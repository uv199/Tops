import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { increment } from "./redux/countSlice";

export default function Amount() {
  const dispatch = useDispatch();

  const data = useSelector((store) => {
      return store.amountSlice;
    });
    console.log("-----------  data----------->", data)
  return (
    <div>
      <h1>Amount is {data?.amount}</h1>
      <hr />
      <Button onClick={() => dispatch(increment())}>inc-count</Button>
    </div>
  );
}
