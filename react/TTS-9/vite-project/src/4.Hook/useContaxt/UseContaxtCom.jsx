import React, { createContext, useState } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

export const NameContaxt = createContext();

export default function UseContaxtCom() {
  let [name, setName] = useState("Urvish Patel");

  return (
    <>
      <NameContaxt.Provider value={name}>
        <ComB name={name} />
        <ComA />
      </NameContaxt.Provider>
    </>
  );
}

/*

name="urvish"
useContaxt  - ComA    
            - ComB
                - ComB2 
                - ComB3 

*/
