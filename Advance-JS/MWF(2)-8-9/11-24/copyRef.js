/*
let x = 100;
let y = x;
x = 999;
console.log("y", y);

let x = { a: 100, b: 500 };
let x2 = { c: 200, d: 800 };
// let y = x; // ref
let y = { ...x, ...x2, name: "urvish" }; // copy
console.log("y", y);
x.a = 300;
console.log("y", y);

// []-->() <-

let car = {
    name: "civic",
    modelNo: 123,
};

// car.modelNo=456

let car2 = {
    ...car,
    modelNo: 456,
};

let customer1 = {
    name: "cus-1",
    ...car,
};
*/

// --------------------------arra-----------------

let a = [1, 2, 3];
let a2 = [10, 20, 30];
// let b = a; // ref
let b = [0, ...a, ...a2, 9000]; // copy

console.log("b", b);
a[2] = 300;
console.log("b", b);

// 1,2,3
// car:"civic", model:123
// 1,2,34,5,6,6,6
console.log("----->", ...b);

let maxVal = Math.max(...b);
console.log("maxVal", maxVal);
