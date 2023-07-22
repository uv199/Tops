import React from "react";

export default function MapFun_key() {
  let names = ["jalpa", "chinmay", "kaushal", "urvish"];
  return (
    <>
      {/* <h1>{names[0]}</h1>
      <h1>{names[1]}</h1>
      <h1>{names[2]}</h1>
     <h1>{names[3]}</h1> */}

      {names.map((e, i) => {
        return <h1 key={i}>{e}</h1>;
        // return <h1>{e}</h1>;
      })}
    </>
  );
}
