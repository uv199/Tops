/*
let obj = {
  name: "urvish",
  1: "green",
  "first name": "patel",
  "@email": "uv@gmail.com",
};

let one = 1
let name = "first name"

console.log("---->",obj.name)
console.log("---->",obj[1])
console.log("---->",obj[one])
console.log("---->",obj["first name"] )
console.log("---->",obj[name])
console.log("---->",obj["@email"] )

*/

let obj = {
  str: "string",
  no: 12,
  null: null,
  undefined: undefined,
  bool: true,
  arr: [1, 2, 3, 4],
  object: { a: 200, b: [10, 20, 30, 40] },
  print: function (x) {
    console.log("print---->", x);
  },
};

//  3,200,30 print

obj.print(10);

let pc = {
  ram: "2gb",
  storage: "512gb",
};

let pcsDetails = [
  {
    id: 1,
    ram: "2gb",
    storage: "512gb",
    graphicsCard:"4gb"
  },
  {
    id: 2,
    ram: "2gb",
    storage: "512gb",
  },
];
