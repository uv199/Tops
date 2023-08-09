import React, { useContext } from "react";
import { CountContext } from "./ContaxtCom";

export default function ComA() {
  return (
    <>
      <h1>Com-A</h1>
      <CountContext.Consumer>
        {(name) => {
          console.log("----name---", name);
          return <h1> {name}</h1>;
        }}
      </CountContext.Consumer>
    </>
  );
}
