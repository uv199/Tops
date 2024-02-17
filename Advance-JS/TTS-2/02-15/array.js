let arr = [
  1,
  "string",
  null,
  undefined,
  false,
  [10, 20, 30, { age: 23 }],
  { name: "urvish patel" },
];

console.log("-----------  arr[0]----------->", arr[0]);
console.log("-----------  arr[0]----------->", arr[5][1]);
console.log("-----------  arr[0]----------->", arr[6].name);
console.log("-----------  arr[0]----------->", arr[5][3].age);


