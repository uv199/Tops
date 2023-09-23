import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./features/count/countSlice";

export default function CountCom() {
  const count = useSelector((state) => {
    console.log(state);
    return state.COUNT;
  });

  let dispatch = useDispatch();
  return (
    <>
      <h1> Count is {count.count}</h1>
      <button onClick={() => dispatch(increment())}>INC</button>
    </>
  );
}
