import React, { useState } from "react";

export default function FunPropsChnage(props) {
  let [chnageName, setChnageName] = useState(props.name);

  function chnageNameFun() {
    let upperCashName = chnageName?.toUpperCase();

    setChnageName(upperCashName);
  }

  return (
    <div>
      <h1>{chnageName}</h1>
      <h1>{props.name}</h1>
      <button onClick={() => chnageNameFun()}>Chnage name</button>
    </div>
  );
}
