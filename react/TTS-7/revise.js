/*

let e = ["chocolate", "strawberry"];

// [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
// ];

let data = e.map((obj) => {
  console.log("----", obj);
  return { value: obj, lable: obj };
});
console.log("-----------  data----------->", data);

*/

let arr = ["uv0", "uj", "jay", "latesh", "sid"];

let serahcText = "j";

let taskArr = [];

taskArr = arr.filter((e) => {
  return e.includes(serahcText);
});
console.log("-----------  taskArr----------->", taskArr);
