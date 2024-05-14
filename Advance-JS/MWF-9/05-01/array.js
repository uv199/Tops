let arr = [
  100,
  "string",
  true,
  undefined,
  null,
  [1, 2, 3, { name: "urvish" }],
  { a: 300, b: 400 },
];

console.log("---->", arr[0]);
console.log("---->", arr[5]);
console.log("---->", arr[5][1]);
console.log("---->", arr[5][3]);
console.log("---->", arr[5][3].name);
