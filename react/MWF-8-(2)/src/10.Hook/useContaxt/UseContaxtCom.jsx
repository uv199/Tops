import React, { useState, createContext } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

export const CountContaxt = createContext();

export default function UseContaxtCom() {
  let [count, setCount] = useState(100);
  return (
    <div>
      <CountContaxt.Provider value={count}>
        <ComA />
        <ComB />
      </CountContaxt.Provider>
    </div>
  );
}
