import React, { createContext } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

export const CountContext = createContext();

export default function ContaxtCom() {
  return (
    <>
      <CountContext.Provider value={"urvish"}>
        <ComA />
        <ComB />
      </CountContext.Provider>
    </>
  );
}
