import React, { createContext, useState } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

export const nameContext = createContext();

export default function ContaxtCom() {
  let [data, setData] = useState("urvish");
  return (
    <>
      <h1>main component</h1>
      <nameContext.Provider value={{ data, setData }}>
        <ComA />
        <ComB value="test" />
      </nameContext.Provider>
    </>
  );
}
