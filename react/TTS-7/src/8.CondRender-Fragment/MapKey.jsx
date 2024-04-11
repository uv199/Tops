import React, { useId } from "react";

export default function MapKey() {
  let arr = ["urvish", "jaymin", "meet", "jay"];

  return (
    <div>
      {arr.map((e, i) => {
        let id = useId();
        return (
          <div key={id}>
            <h1>
              {i + 1}.{e}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
