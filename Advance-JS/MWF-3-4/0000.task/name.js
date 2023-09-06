let name = ["i", "am", "urvish"];
let newArr = [];
for (let i = 0; i < name.length; i++) {
  let x = name[i].split("").reverse().join("");
  newArr.unshift(x);
  console.log("x:", x);
}
console.log("newArr:", newArr);
