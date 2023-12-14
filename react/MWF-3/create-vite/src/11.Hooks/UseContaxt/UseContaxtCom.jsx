import React, { createContext, useState } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

export const NameContaxt = createContext(null);

export default function UseContaxtCom() {
  let [name, setName] = useState("Urvish Patel");
  return (
    <div>
      <NameContaxt.Provider value={{ name, setName }}>
        <ComB name={name} />
        <ComA />
      </NameContaxt.Provider>
    </div>
  );
}
