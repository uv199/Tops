import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./features/amount/amountSlice";

export default function AmountCom() {
  const amount = useSelector((state) => state.AMOUNT);
  const dispatch = useDispatch();
  return (
    <>
      <h1> Amount is {amount.amount}</h1>
      <button onClick={() => dispatch(increment())}>INC_AMT</button>
    </>
  );
}
