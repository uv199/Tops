import React from "react";
import { useSelector } from "react-redux";
export default function Counter() {
  let data = useSelector((store) => {
    return store?.countReducer?.count;
  });

  console.log("-----------  data----------->", data);
  return (
    <div>
      <h1>Counter is {data}</h1>
    </div>
  );
}
