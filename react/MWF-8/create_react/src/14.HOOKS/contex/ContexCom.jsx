import React, { createContext, useState } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

export const NameContext = createContext();

export default function ContexCom() {
  const [name, setName] = useState("urvish");
  return (
    <>
      <h1>ContexCom</h1>
      {/* name:name */}
      <NameContext.Provider value={{ name, setName: setName }}>
        <ComA />
        <ComB name={"Urvish Patel"} />
      </NameContext.Provider>
      <h1>name --- {name}</h1>
      {/* <NameContext.Provider value={"URVISH PATEL"}>
        <ComA />
        <ComB name={"Urvish Patel"} />
      </NameContext.Provider> */}
    </>
  );
}
