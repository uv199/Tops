import React, { useContext } from "react";
import { CountContext, SurnameContext } from "./UseContaxtCom";

export default function Com_A() {
  const data = useContext(CountContext);
  console.log("data", data);
  const surname = useContext(SurnameContext);
  console.log("surname", surname);
  return <h1>Com_A</h1>;
}
