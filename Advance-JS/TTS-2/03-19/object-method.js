let obj = {
  name: "urvish",
  age: 23,
  city: "surat",
};

let keyArr = Object.keys(obj);
// console.log("-----------  keyArr----------->", keyArr);

let valueArr = Object.values(obj);
// console.log("-----------  valueArr----------->", valueArr);

let entries = Object.entries(obj);
// console.log("-----------  entries----------->", entries);

let user = {};
let kArr = Object.keys(user);
console.log("-----------  kArr----------->", kArr);
if (kArr.length === 0) {
  console.log("user is empty");
} else {
  console.log("user name is ", user.name);
}
