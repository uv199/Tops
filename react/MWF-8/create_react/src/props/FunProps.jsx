import { functions } from "lodash";
import React, { useState } from "react";

export default function FunProps(props) {
  let str = ["meet", "uv", "yash"];
  let studentName = [
    { name: "meet", age: 20 },
    { name: "meet", age: 20 },
  ];
  let click = false;
  let [click2, setClick2] = useState(true);
  function applyFilter() {
    setClick2(!click2);
  }
  return (
    <div>
      {/* <h1>{props.type.test}</h1> */}
      {click2
        ? studentName.map((e) => {
            return (
              <div>
                <h1>
                  {e.name}
                  {e.age}
                </h1>
              </div>
            );
          })
        : str.filter((e) => {
            return e.length === 2 ? <h1>{e}</h1> : null;
          })}
      <button onClick={() => applyFilter()}>click me</button>
      {/* <h1>{studentName[0]}</h1>
      <h1>{studentName[1]}</h1>
      <h1>{studentName[2]}</h1> */}

      

    </div>
  );
}
