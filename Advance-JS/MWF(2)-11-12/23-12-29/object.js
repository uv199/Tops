/*let user = {
  name: "urvish",
  age: 23,
  city: "surat",
  add: {
    pinCode: 395007,
  },
  20: "20----20",
  "first name": "patel",
};

let keyName = "add";

// console.log("----->", user[keyName]);
console.log("----->", user[keyName].pinCode);
console.log("----->", user[20]);
console.log("----->", user["first name"]);

// ["name","age","20","add"]

// to ge
 keys
let keysArr = Object.keys(user);
// console.log("-----------  keysArr----------->", keysArr);

// to get value
let valueArr = Object.values(user);
// console.log("-----------  valueArr----------->", valueArr);

// to get key valyue pair sub array

let entArr = Object.entries(user);
// console.log("-----------  entArr----------->", entArr);

// check object empty or not

let matchUser = {a:20};

let val = Object.values(matchUser);
console.log("-----------  val----------->", val.length)

if (val.length === 0) {
  console.log("----------- obj is empty----------->");
} else {
  console.log("----------- obj have some value----------->");
}*/

let name = " my name is uv".split("");
// let name2 = name.split(" ");
// for (let i = 0; i < name2.length; i++) {
//   const element = name2[i];
//   console.log("-----------  element----------->", element);
//   let a = element.charAt(0).toUpperCase();
//   console.log("-----------  a----------->", a);
//   let b = element?.slice(1, element?.length);
//   console.log("-----------  b----------->", b);
//   name2[i] = a + b;
// }
//   .split(" ")
//   .map((e) => e.charAt(0).toUpperCase() + e.slice(1, e?.length))
//   .join(" ");
// console.log("-----------  name2----------->", name2.join(" "));

for (let i = 0; i < name.length; i++) {
  const element = name[i];
  if (i === 0) name[i] = name[i].toUpperCase();
  if (element == " ") {
    name[i + 1] = name[i + 1].toUpperCase();
  }
}
console.log("-----------  name----------->", name.join(""));
