import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fethchUser } from "./fetures/user/userSlice";

export default function UserCom() {
  let data = useSelector((state) => {
    console.log("state", state);
  });

  const dispatch = useDispatch();
  let d = dispatch(fethchUser());
  console.log("d", d);
  return <>UserCom</>;
}
