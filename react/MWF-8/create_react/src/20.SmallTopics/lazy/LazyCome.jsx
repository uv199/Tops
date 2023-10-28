import React from "react";

export default function LazyCome() {
  for (let i = 0; i < 1000000000; i++) {}
  return <h1>LazyCome</h1>;
}
