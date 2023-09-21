import React from "react";
import { useSelector } from "react-redux";

export default function AmountCom() {
  const amount = useSelector((state) => {
    return state.AMOUNT.amount;
  });

  return (
    <>
      AmountCom
      <h1>count is : {amount}</h1>
    </>
  );
}
