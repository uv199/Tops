/*
let a = 20;
let b = a;
a = 600;
console.log("-----------  b----------->", b);
*/

let obj1 = {
  a: 20,
  b: 30,
  c: { c1: 50, c2: 80 },
};
// let obj2 = obj1;
// let obj2 = { ...obj1 };

// deep copy
let jsData = JSON.stringify(obj1);
let obj2 = JSON.parse(jsData);

obj1.a = 2000;
obj1.c.c1 = 5000;
console.log("-----------  obj1----------->", obj1);
console.log("-----------  obj2----------->", obj2);

let user = { name: "urvish" };

let abc = JSON.stringify(user);
console.log("-----------  abc----------->", abc);
if (abc !== "{}") {
  console.log("object have some value", user);
} else {
  console.log("object is empty");
}
