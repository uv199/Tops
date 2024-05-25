/*
date 11/01/24
- find how to center a tost
- and i want only one tost at a time


let colorArr = ["red", "yellow"];

let e = [
    { label: "RED", value: "red" },
    { label: "YELLOW", value: "yellow" },
];

let data = e.map((e) => e.value);
console.log("-----------  data----------->", data);

*/
let cloArr = ["red", "yellow"];

let data2 = cloArr.map((e) => {
  return { label: e.toUpperCase(), value: e };
});
console.log("-----------  data2----------->", data2)
