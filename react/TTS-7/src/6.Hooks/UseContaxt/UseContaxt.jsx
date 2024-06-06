import React, { createContext, useState } from "react";
import ComA1 from "./ComA1";
import ComB1 from "./ComB1";

export const AgeContext = createContext();

export default function UseContaxt() {
  let [input, setInput] = useState("");
  let name = "Urvish Patel";
  let age = 50;
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      {/* it shoud be in a3 */}
      <h1>{input}</h1> {/* it should be in b1 */}
      <AgeContext.Provider value={{ age: age, name: name }}>
        <ComA1 name={name} />
        <ComB1 />
      </AgeContext.Provider>
    </div>
  );
}
