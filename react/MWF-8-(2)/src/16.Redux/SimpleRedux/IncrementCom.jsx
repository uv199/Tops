import { Button } from "reactstrap";
import React from "react";
import { useDispatch } from "react-redux";
import { decrementCount, incrementCount } from "./redux/fetures/counterSlice";
export default function IncrementCom() {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(incrementCount());
  };

  return (
    <div className="bg-red-300 p-3 w-[500px]">
      <h1>IncrementCom</h1>
      <Button onClick={() => incrementHandler()}>Inc-1</Button>
      <Button onClick={() => dispatch(decrementCount())}>Dec-1</Button>
    </div>
  );
}
