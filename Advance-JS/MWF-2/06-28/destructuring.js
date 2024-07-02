/*
let obj = {
  a: 20,
  b: 30,
  c: 40,
};

// let a = obj.a;
// let b = obj.b;
// let c = obj.c;

let { a, C, b } = obj;

console.log("-----------  a----------->", a);
console.log("-----------  b----------->", b);
console.log("-----------  C----------->", C);

// with out destructuring
// function print(obj) {
//   // console.log("-----------  obj----------->", obj);
//   console.log(`my name is ${obj.name}, i am ${obj.age} yeras old`);
// }

// with destructuring
function print({ name, age }) {
  console.log(`my name is ${name}, i am ${age} yeras old`);
}

print({ name: "urvish", age: 23 });

function giveData() {
  return { name: "urvish", age: 23 };
}

// let obj2 = giveData();
// console.log("-----------  obj2----------->", obj2)
// console.log(`my name is ${obj2.name}, i am ${obj2.age} yeras old`);

let { name, age } = giveData();
console.log(`my name is ${name}, i am ${age} yeras old`);


*/
let arr = [10, 20, 30];

// let x = arr[0];
// let y = arr[1];
// let z = arr[2];

let [x, z, y, a] = arr;
console.log("-----------  x----------->", x);
console.log("-----------  y----------->", y);
console.log("-----------  z----------->", z);
