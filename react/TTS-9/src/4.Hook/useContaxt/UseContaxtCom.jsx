import React, { createContext, useState } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

export const NameContaxt = createContext();

export const AgeContaxt = createContext();

export default function UseContaxtCom() {
  let [name, setName] = useState("Urvish Patel");
  let [age, setAge] = useState(23);

  return (
    <>
      <NameContaxt.Provider value={name}>
        <ComB name={name} />
        <AgeContaxt.Provider value={{ age: age }}>
          <ComA />
        </AgeContaxt.Provider>
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
