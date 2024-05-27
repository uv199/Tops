import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { incrementCount } from "./Redux/counterSlice";

export default function Component11() {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(incrementCount());
  };

  return (
    <div className="flex flex-col justify-center items-center border w-[90%] h-[90%]">
      Component11
      <Button onClick={incrementHandler}>Inc-11</Button>
    </div>
  );
}
