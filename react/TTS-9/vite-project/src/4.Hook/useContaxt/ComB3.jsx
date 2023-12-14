import React, { useContext } from "react";
import { NameContaxt, AgeContaxt } from "./UseContaxtCom";
export default function ComB3({ name3 }) {
  const data = useContext(NameContaxt);

  // can't get data because we not wrap comB in AgeContaxt
  const data2 = useContext(AgeContaxt);
  console.log("-----------  data2----------->", data2);
  return (
    <>
      <h1>1. My Name is {name3}</h1>
      <h1>2. My Name is {data}</h1>
    </>
  );
}
