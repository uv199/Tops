import React from "react";

export default function RoundCompo() {
  return (
    <div>
      <div
        style={{
          borderRadius: "50%",
          border: "1px solid black",
          height: "50px",
          fontSize: "15px",
          width: "50px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "20px",
        }}
      >
        1 day
      </div>
    </div>
  );
}
