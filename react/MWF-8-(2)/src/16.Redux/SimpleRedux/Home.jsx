import React, { useEffect } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { resetCount } from "./Redux/counterSlice";

export default function Home() {
  let data = useSelector((store) => {
    return store.COUNT;
  });

  useEffect(() => {
    console.log("-=-=-=-=->");
  }, [data]);

  const dispatch = useDispatch();
  return (
    <div className="p-20 border m-20">
      <h1 className="text-2xl">Count is {data.count}</h1>
      <Button onClick={() => dispatch(resetCount())}>Reset</Button>
      <div className="flex w-full h-full">
        <Component1 />
        <Component2 />
      </div>
    </div>
  );
}
