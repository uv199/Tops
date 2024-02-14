import React, { useId } from "react";

let name = ["urvish", "test", "yuvraj", "test"];
export default function MapAndKey() {
  return (
    <div>
      <ul>
        {name?.map?.((e, i) => {
          let id = useId();
          console.log("-----------  id----------->", id);
          return (
            <div key={id}>
              <h1>{i + 1}</h1>
              <li>{e}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
