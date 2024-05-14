import React from "react";

export default function MapKeyCom() {
  let name = ["uv", "uj", "up", "us"];
  return (
    <div>
      {name?.map?.((e, i) => {
        return (
          <div key={i}>
            <h1>{e}</h1>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
