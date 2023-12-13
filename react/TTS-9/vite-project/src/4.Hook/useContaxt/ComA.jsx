import React, { useContext } from "react";
import { NameContaxt } from "./UseContaxtCom";

export default function ComA() {
  const data = useContext(NameContaxt);
  console.log("----------- AAAA data----------->", data)
  return <h1>ComA - {data}</h1>;
}
