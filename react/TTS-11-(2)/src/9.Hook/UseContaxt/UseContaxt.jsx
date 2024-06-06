import React, { createContext, useState } from "react";
import ComA1 from "./ComA1";
import ComB1 from "./ComB1";

export const UserContext = createContext();

export default function UseContaxt() {
  let [task, setTask] = useState("");
  let name = "Urvish Patel";
  const age = 33;
  return (
    <div>
      <UserContext.Provider value={{ age: age }}>
        <ComA1 name={name} />
        <ComB1 />
      </UserContext.Provider>
    </div>
  );
}
