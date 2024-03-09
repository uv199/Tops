import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import {
  decrementCount,
  incByInput,
  incrementCount,
  incrementcunt2,
} from "../Redux/fetures/count/countSlice";

export default function CountComponenet() {
  let [number, setNumber] = useState(0);

  const data = useSelector((state) => {
    return state.countReducer;
  });

  const dispatch = useDispatch();

  // count incremenet by one
  const incrementOne = () => {
    dispatch(incrementCount());
  };

  const addNumber = () => {
    dispatch(incByInput(+number));
    setNumber("");
  };

  return (
    <div>
      <h1>Count is {data.count}</h1>
      <Input
        placeholder="Please enter number"
        type="number"
        value={number}
        onChange={(e) => setNumber(e?.target?.value)}
      />
      {/* <h1>Count is {data.count2}</h1> */}
      <div className=" d-flex gap-4 m-4">
        <Button onClick={addNumber}>Inc-Input</Button>

        <Button onClick={() => incrementOne()}>Inc</Button>

        <Button onClick={() => dispatch(decrementCount())}>Dec</Button>

        {/* <Button onClick={() => dispatch(incrementcunt2())}>Inc-Count-2</Button> */}
      </div>
    </div>
  );
}
