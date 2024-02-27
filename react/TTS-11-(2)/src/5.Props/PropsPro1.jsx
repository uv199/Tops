import React from "react";

export default function PropsPro1(props) {
  return (
    <div>
      <div
        className="m-3 d-flex  justify-content-center align-items-center "
        style={{ width: "200px", height: "200px", background: props?.color }}
      >
        <h1>{props?.color}</h1>
      </div>
    </div>
  );
}
