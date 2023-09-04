let str1 = 'ur"vish';
let str2 = "urv'ish";
let str3 = `urvi" urvish's sh`;

let x = null;
console.log("x:", x);
// let m =

let obj = {
  number: 20,
  bool: true,
  string: "str",
  arr: [1, 2],
  object: {
    aa: 20,
    arr: [1, 2, { no: [[{ m: 300 }]] }],
  },
  null: null,
  und: undefined,
  fun: function (params) {
    console.log("---->");
  },
};
let arrrr = [1, 2, 300];
arrrr[2];
obj.arr;
obj.object.arr[2];
console.log(" obj.object.arr[2].no:", obj.object.arr[2].no);
console.log(" obj.object.arr[2].no:", obj.object.arr[2].no[0][0].m);

[
  { name: "uv", age: 123 },
  { name: "test", age: 30 },
];

[{}];

// "use strict"
// var x =50
// x=60
// console.log("🚀 ~ file: data-type.js:44 ~ x:", x)
