// spread

let arr = [1, 2, 3, 4];
// let arr2 = arr;
// let arr3 = [...arr, 5];
// arr[0] = 30;
// console.log("arr2 :", arr2);
// console.log("arr3 :", arr3);

// let obj1 = { a: 10, b: 20 };
// let obj2 = obj1;

// let obj3 = { ...obj1 };
// obj1.a = 30;
// console.log("obj2 :", obj2);
// console.log("obj3 :", obj3);

// function sum(a, b, ...c) {
//   console.log("a, b :", a, b);
//   console.log("c :", c);
//   return a + b;
// }

// console.log("sum() :", sum(1, 2, 3, 4, 5));
// console.log("sum() :", sum(...arr)); //1, 2, 3, 4

// this
// let obj = {
//   a: 10,
//   b: 20,
//   sum: function () {
//     return this.a + this.b;
//   },
// };
// console.log(obj.sum());

//distructuring

let obj = {
  a: 10,
  b: 20,
};

// let x = obj.a;
// let y = obj.b;

// let { x, y } = obj;
let { a, b } = obj;
console.log("a, b :", a, b);
// console.log("x, y :", x, y); // undifine
