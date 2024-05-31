import React from "react";
import { useSelector } from "react-redux";

export default function DisplayCom() {
  let data = useSelector((store) => {
    return store.counterSlice;
  });
  return (
    <div className="bg-gray-300 p-3 w-[500px]">
      <h1>DisplayCom</h1>
      <h1 className="text-2xl">Count is {data.count}</h1>
    </div>
  );
}
