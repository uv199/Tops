import { useEffect } from "react";
import { useState } from "react";

export function sum(a, b) {
  console.log("------sum----->");
  return a + b;
}
export function sub(a, b) {
  console.log("------sub----->");
  return a - b;
}
export const DATA = "--->DATA";

export default function devide() {
  console.log("------devide----->");
  return a / b;
}

// module.exports = {
//   sum,
// sub
// };
