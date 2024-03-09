import React, { useState } from "react";
import Com_A from "./Com_A";
import Com_B from "./Com_B";
import { createContext } from "react";

export const SurnameContext = createContext();
export const CountContext = createContext();

export default function UseContaxtCom() {
  let [count, setCount] = useState(0);
  return (
    <>
      <h1>Count is {count}</h1>
      <SurnameContext.Provider value={"PATEL"}>
        <CountContext.Provider value={{ count, setCount }}>
          <Com_B name={"Urvish"} />
        </CountContext.Provider>
        <Com_A />
      </SurnameContext.Provider>
    </>
  );
}
