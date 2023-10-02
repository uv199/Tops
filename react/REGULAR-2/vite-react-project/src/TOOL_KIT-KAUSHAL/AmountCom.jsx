import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { incAmount } from "./fetures/amount/amountSlice";

export default function AmountCom() {
  const y = useSelector((state) => state.AMOUNT.amount);
  const dispatch = useDispatch();
  return (
    <>
      <h1>AmountCom</h1>
      <h1>Amount is {y}</h1>
      <Button color="danger" onClick={() => dispatch(incAmount())}>
        INC-AMT
      </Button>
    </>
  );
}
