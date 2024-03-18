let obj = { a: 10, b: 20 };

// let a = obj.a;
// let b = obj.b;
let { b, a, A, c } = obj;
// console.log("-----------  A----------->", A);
// console.log("-----------  c----------->", c);
// console.log("-----------  a----------->", a);
// console.log("-----------  b----------->", b);

let arr = [10, 20, 30];

// let x = arr[0];
// let y = arr[1];
// let z = arr[2];
let [x, z, y, m] = arr;
// console.log("-----------  m----------->", m);
// console.log("-----------  x----------->", x);
// console.log("-----------  y----------->", y);
// console.log("-----------  z----------->", z);

let person = {
  name: "URVISH",
  age: 23,
  city: "SURAT",
};

// without destructure
// function printDetails(obj) {
//   console.log("my name is ", obj.name);
//   console.log("my age is ", obj.age);
//   console.log("i'm living is ", obj.city);
// }

// with destructure
function printDetails({ name, age, City }) {
  console.log("my name is ", name);
  console.log("my age is ", age);
  console.log("i'm living is ", City);
}

// printDetails(person);

function return2Hobby() {
  return ["HOBBY-1", "HOBBY-2"];
}

// without destructure
// let hobbyArr = return2Hobby();
// console.log("hobby 1 is ", hobbyArr[0]);
// console.log("hobby 2 is ", hobbyArr[1]);

// with destructure
let [h1, h2, h3] = return2Hobby();
console.log("-----------  h3----------->", h3);
console.log("hobby 1 is ", h1);
console.log("hobby 2 is ", h2);

// made a function which return object which have value name city age and get that return data by destructure
// pass a array of hobby in function and take that 2 hobby in function by destructure
