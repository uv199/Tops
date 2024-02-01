/*
let a = 10;
let y = a;
a = 100;
console.log("-----------  y----------->", y);

let obj1 = { a: 20, b: 200, c: { c1: 400, c2: 90 } };

// let obj2 = obj1;
let obj2 = { ...obj1 }; //copy

//  ... spred/rest

obj1.a = 900;
obj1.c.c1 = 10000;
console.log("-----------  obj1----------->", obj1);
console.log("-----------  obj2----------->", obj2);
*/
//

let arr = [[10, 20], 2, 3, 4];
// let arr2 = arr;
let arr2 = [...arr];
arr[1] = 200;
arr[0][0] = 10000;

console.log("-----------  arr2----------->", arr2);
console.log("-----------  arr----------->", arr);


