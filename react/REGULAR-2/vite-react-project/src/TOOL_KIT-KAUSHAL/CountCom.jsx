import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { incCount, incCountByValue } from "./fetures/count/countSlice";

export default function CountCom(props) {
  const x = useSelector((state) => {
    return state?.COUNT?.count;
  });

  const dispatch = useDispatch();

  return (
    <>
      <h1>CountCom</h1>
      <h1>Count is {x}</h1>
      <Button color="danger" onClick={() => dispatch(incCount())}>
        INC-COUNT
      </Button>
      <Button color="danger" onClick={() => dispatch(incCountByValue(10))}>
        INC-COUNT-10
      </Button>
    </>
  );
}
