import React from "react";
import Upper from "./Upper";
import Category from "./Category";

export default function Main() {
  return (
    <div style={{ backgroundColor: "#faf9f6", padding: "60px" }}>
      <Upper />
      <div style={{ display: "flex" }}>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
}
