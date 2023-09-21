import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function User() {
  let x = useSelector((state) => {
    return state.USER;
  });
  let y = useDispatch();
//   y(action )
  console.log("y", y);
  console.log("x", x);
  return <div>User</div>;
}
