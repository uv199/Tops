import React, { createContext, useState } from "react";
import ComA from "./ComA";
import ComB from "./ComB";
import { Comb2Context } from "./ComB2";

export const nameContext = createContext();

export default function ContaxtCom() {
  let [data, setData] = useState("urvish");
  return (
    <>
      <h1>main component</h1>
      <Comb2Context.Provider value={"test-app"}>
        <nameContext.Provider value={{ data, setData }}>
          <ComA />
          <ComB value="test" />
        </nameContext.Provider>
      </Comb2Context.Provider>
    </>
  );
}
