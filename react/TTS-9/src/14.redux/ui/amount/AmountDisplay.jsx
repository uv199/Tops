import React from "react";
import { useSelector } from "react-redux";

export default function AmountDisplay() {
  const amount = useSelector((store) => {
    return store.amountReducer.amount;
  });
  return (
    <div>
      <hr />
      <h1>Amount is {amount}</h1>
    </div>
  );
}
