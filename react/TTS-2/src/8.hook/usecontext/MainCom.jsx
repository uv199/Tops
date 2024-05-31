import React, { createContext } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

export const UserContext = createContext();

export default function MainCom() {
  let name = "urvish";
  let age = 100;
  return (
    <div>
      <UserContext.Provider value={age}>
        <ComA />
        <ComB name={name} />
      </UserContext.Provider>
    </div>
  );
}
