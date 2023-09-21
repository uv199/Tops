import React from "react";
import { useSelector } from "react-redux";

export default function CountCom() {
  let data = useSelector((state) => {
    return state.COUNT;
  });
  return (
    <>
      CountCom
      <h1>count is : {data.count}</h1>
    </>
  );
}
