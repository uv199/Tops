import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { incAmount, incAmt5 } from "../../Redux/features/amount";

export default function Amount() {
  let data = useSelector((store) => {
    return store.amountReducer.amount;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Amount is {data}</h1>
      <Button color="danger" onClick={() => dispatch(incAmount())}>
        Inc
      </Button>
      <Button color="danger" onClick={() => dispatch(incAmt5())}>
        Inc-5
      </Button>
    </div>
  );
}
