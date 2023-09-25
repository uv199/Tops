import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./fetures/count/countSlice";

export default function CountCom() {
  let data = useSelector((state) => {
    return state.COUNT;
  });
  const dispatch = useDispatch();
  return (
    <>
      CountCom
      <h1>count is : {data.count}</h1>
      <button onClick={() => dispatch(increment())}>add-amount</button>
    </>
  );
}
