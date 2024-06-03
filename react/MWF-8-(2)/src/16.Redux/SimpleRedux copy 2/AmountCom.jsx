import React from "react";
import { useSelector } from "react-redux";

export default function AmountCom() {
  let amountSlice = useSelector((store) => {
    return store?.amountSlice;
  });
  return (
    <div>
      <h1 className="text-2xl">Amount is {amountSlice.amount}</h1>
    </div>
  );
}
