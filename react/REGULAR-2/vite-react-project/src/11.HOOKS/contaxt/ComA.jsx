import React, { useContext } from "react";
import { Comb2Context } from "./ComB2";

export default function ComA() {
  const data = useContext(Comb2Context);
  console.log("🚀 ~ file: ComA.jsx:6 ~ ComA ~ data:", data);
  return (
    <>
      <h1>Com-A</h1>
    </>
  );
}
