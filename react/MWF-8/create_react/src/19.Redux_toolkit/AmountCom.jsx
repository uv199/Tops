import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { incrementByValue } from "./fetures/amount/amountslice";
export default function AmountCom() {
  let data = useSelector((state) => {
    return state.AMOUNT;
  });

  const dispatch = useDispatch();
  return (
    <>
      <h1> Amount is {data?.amount}</h1>
      <Button
        color="danger"
        onClick={() => dispatch(incrementByValue({ amountValue: 100 }))}
      >
        Increment-Amt
      </Button>
    </>
  );
}
