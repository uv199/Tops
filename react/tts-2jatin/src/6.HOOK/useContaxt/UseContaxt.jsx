import React, { createContext } from "react";
import ComA1 from "./ComA1";
import ComB1 from "./ComB1";

export const UserContaxt = createContext();

export default function UseContaxt() {

  // state

  let name = "URVISH V PATEL";
  let age = 232;
  let city = "surat";
  return (
    <div>
      <UserContaxt.Provider value={{ age: age, city: city }}>
        <ComA1 name1={name} />
        <ComB1 />
      </UserContaxt.Provider>
    </div>
  );
}
