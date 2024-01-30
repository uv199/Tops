let arr = [
  { name: "urvish" },
  [99, 22, 44],
  function () {
    console.log("-----arry function------>");
  },
  1000,
  "string",
  true,
  null,
  undefined,
];

console.log("-----------  index----------->", arr[1][2]);
console.log("-----------  index----------->", arr[0].name);

arr[2]();
