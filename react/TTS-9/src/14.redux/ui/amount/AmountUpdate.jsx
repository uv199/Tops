import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { incAmt } from "../../redux/fetures/amount";

export default function AmountUpdate() {
  const dispatch = useDispatch();
  return (
    <div>
      <Button color="danger" onClick={() => dispatch(incAmt())}>
        Inc-1
      </Button>
    </div>
  );
}
