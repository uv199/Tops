import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
// import { counterAction } from "./counterSlice";
import { dec, inc } from "./counterSlice";
export default function CountCom() {
  let counterSlice = useSelector((store) => {
    console.log("-----------  store----------->", store);
    return store.counterSlice;
  });

  const dispatch = useDispatch();
  const incHandler = () => {
    // dispatch(counterAction.inc);
    dispatch(inc());
  };
  return (
    <div>
      <h1>Count is {counterSlice.count}</h1>
      <Button onClick={() => incHandler()}>Inc</Button>
      <Button onClick={() => dispatch(dec())}>dec</Button>
      <h1>Count-2 is {counterSlice.count2}</h1>
    </div>
  );
}
