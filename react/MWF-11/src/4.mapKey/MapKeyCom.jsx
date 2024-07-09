import React from "react";

export default function MapKeyCom() {
  let arr = ["uv", "jay", "mit", "dev"];
  return (
    <div>
      {/* <li>{arr[0]}</li>
      <li>{arr[1]}</li>
      <li>{arr[2]}</li>
      <li>{arr[3]}</li> */}

      {arr.map((e, i) => {
        return (
          // <li key={i}>{e}</li>
          <div key={i}>
            <li>{e}</li>
            <hr className="" />
          </div>
        );
      })}
    </div>
  );
}
