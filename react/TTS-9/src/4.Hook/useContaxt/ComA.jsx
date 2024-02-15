import React, { useContext } from "react";
import { NameContaxt, AgeContaxt } from "./UseContaxtCom";

export default function ComA() {
  const data = useContext(NameContaxt);

  const { age } = useContext(AgeContaxt);

  return (
    <>
      <h1>ComA - {data}</h1>
      <h1>age is {age} </h1>
    </>
  );
}
