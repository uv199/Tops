let user = {
  name: "urvish",
  age: 12,
  city: "surat",
  state: "gujarat",
  pinCode: 395007,
};

let { name, age, ...address } = user;
// let { name, ...address,age } = user;
// console.log("name", name);
// console.log("age", age);
// console.log("address", address);

// spred
// user.hobby = ["reading"];
user = { ...user, hobby: ["reading"] };
console.log("user", user);

// ----------------array-----------------------

let arr = [1, 2, 3, 4, 5];
let [a, b, ...c] = arr;
console.log("a", a);
console.log("b", b);
console.log("c", c);

// -----------------------------------

function fun(a, b, ...c) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
}
let no = [1, 2, 3, 4, 5, 5, 6, 7, 7];
fun(...no);
// fun(1, 2, 3, 4, 5, 5, 6, 7, 7);
