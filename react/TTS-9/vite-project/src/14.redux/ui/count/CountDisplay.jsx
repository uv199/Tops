import React from "react";
import { useSelector } from "react-redux";
export default function CountDisplay() {
  let data = useSelector((store) => {
    return store.COUNT;
  });
  return (
    <div>
      <h1>Count is {data.count}</h1>
    </div>
  );
}
