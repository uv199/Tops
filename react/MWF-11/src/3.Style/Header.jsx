import React from "react";

export default function Header() {
  let styleObj = { color: "white" };
  let color = "red";
  return (
    <div style={{ backgroundColor: color, textAlign: "center", width: "100%" }}>
      <h1 style={styleObj}>Header</h1>
    </div>
  );
}
