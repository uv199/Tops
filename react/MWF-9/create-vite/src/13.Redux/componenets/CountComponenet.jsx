import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import {
  decrementCount,
  incrementCount,
  incrementcunt2,
} from "../Redux/fetures/count/countSlice";

export default function CountComponenet() {
  const data = useSelector((state) => {
    console.log("-----------  state----------->", state);
    return state.countReducer;
  });
  console.log("-----------  data----------->", data);

  const dispatch = useDispatch();

  // count incremenet by one
  const incrementOne = () => {
    dispatch(incrementCount());
  };

  return (
    <div>
      <h1>Count is {data.count}</h1>
      <h1>Count is {data.count2}</h1>
      <Button onClick={() => incrementOne()}>Inc</Button>
      <Button onClick={() => dispatch(decrementCount())}>Dec</Button>
      <Button onClick={() => dispatch(incrementcunt2())}>Inc-Count-2</Button>
    </div>
  );
}
