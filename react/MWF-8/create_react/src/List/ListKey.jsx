import React, { useId } from "react";

export default function ListKey() {
  let arr = ["urcish", "tejash", "patil", "banti"];

  function onclick() {
    console.log("------->");
  }
  return (
    <>
      <ul>
        {arr.map((e, i) => {
          return (
            <li key={i} onClick={() => onclick()}>
              {e}
            </li>
          );
        })}
      </ul>
      {/* <h1>{arr[0]}</h1>
      <h1>{arr[1]}</h1>
      <h1>{arr[2]}</h1>
      <h1>{arr[3]}</h1> */}
    </>
  );
}
