// || returns the first truthy value.
// ?? returns the first defined value.

let y = 0;
// let x = y || "test"; // null/undefined/0/false
let x = y ?? "test"; // null/undefined
console.log("---x--->", x);
