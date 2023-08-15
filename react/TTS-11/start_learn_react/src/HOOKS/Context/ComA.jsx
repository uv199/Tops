import React, { useContext } from "react";
import { UserContext } from "./ContexCom";
export default function ComA() {
  const data = useContext(UserContext);
  console.log("🚀 ~ file: ComA.jsx:5 ~ ComA ~ data:", data);
  return (
    <>
      <h1>ComA</h1>
      <h1>ComA--{data?.user}</h1>
    </>
  );
}
