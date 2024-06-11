import React, { createContext } from "react";
import ComA1 from "./ComA1";

export const UserContext = createContext();

export default function UseContext() {
  let name = "Urvish V. Patel";
  let age = 23;
  return (
    <div>
      <UserContext.Provider value={{ age: age }}>
        <ComA1 name={name} />
      </UserContext.Provider>
    </div>
  );
}
