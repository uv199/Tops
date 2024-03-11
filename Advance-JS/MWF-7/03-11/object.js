/*
let obj = {
  1: "urvish",
  "first name": "patel",
  "hello@name": 123,
  age: 23,
};

console.log("-----------  obj.age----------->", obj.age);
console.log("-----------  obj.1----------->", obj[1]);
console.log("-----------  obj.1----------->", obj["first name"]);

let keyName = "hello@name";
console.log("------>", obj[keyName]);
*/

let obj = {
  number: 23,
  string: "string",
  boolean: true,
  null: null,
  undefined: undefined,
  object: { name: "urvish" },
  array: [1, 2, 3, 4],
  printFunction: function () {
    console.log("--------obj.print-------->", obj.printFunction);
    console.log("this", this);
  },
};
// obj.printFunction();

console.log("----", "string" in obj);
console.log("----", "name" in obj);
