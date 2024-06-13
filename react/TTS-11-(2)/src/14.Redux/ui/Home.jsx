import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { incrementCount } from "../redux/countSlice";

export default function Home() {
  let data = useSelector((store) => {
    return store.COUNT;
  });

  let dispatch = useDispatch();
  return (
    <div>
      <h1>Count is {data.count}</h1>
      <Button onClick={() => dispatch(incrementCount())}>Inc</Button>
    </div>
  );
}
