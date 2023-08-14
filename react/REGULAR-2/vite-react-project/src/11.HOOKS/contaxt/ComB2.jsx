import React, { createContext } from "react";
import ComB3 from "./ComB3";

export const Comb2Context = createContext();
export default function ComB2(props) {
  return (
    <>
      <Comb2Context.Provider value={"test"}>
        <h1>Com-B2</h1>
        <ComB3 value={props.value} />
      </Comb2Context.Provider>
    </>
  );
}
