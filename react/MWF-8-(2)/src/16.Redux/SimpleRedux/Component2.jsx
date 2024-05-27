import { Button } from "reactstrap";
import React from "react";
import { useDispatch } from "react-redux";
import { decrementCount } from "./Redux/counterSlice";

export default function Component2() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center border w-[90%] h-full">
      Component2
      <Button onClick={() => dispatch(decrementCount())}>Dec-1</Button>
    </div>
  );
}
