import React, { useContext } from "react";
import { NameContaxt } from "./UseContaxtCom";
export default function ComB3({ name3 }) {
  const data = useContext(NameContaxt);
  console.log("-----------  data----------->", data);
  return (
    <>
      <h1>1. My Name is {name3}</h1>
      <h1>2. My Name is {data}</h1>
    </>
  );
}
