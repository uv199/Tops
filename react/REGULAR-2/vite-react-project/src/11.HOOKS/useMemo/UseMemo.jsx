import React, { useCallback, useState, useSyncExternalStore } from "react";
import Com from "./Com";

export default function UseMemo() {
  const [name, setName] = useState("");
  const [isRed, setIsRed] = useState(true);
  
  const splitName= useCallback( (params)=> {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    let arr = name.split(" ");
    return arr;
  },[name])
  function changeColour(params) {
    setIsRed(!isRed);
  }
  return (
    <>
      <h1 style={{ color: isRed ? "black" : "red" }}>COLOR</h1>
      <h1>{name}</h1>
      <input type="text" onChange={(e) => setName(e?.target?.value)} />
      <button onClick={() => changeColour()}>chnage color</button>
      <Com arr={splitName} />
    </>
  );
}
