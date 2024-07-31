/*

destructure
rest spred
call back
HOF
promise


// const arr = useState("");
// console.log("-----------  arr----------->", arr)

// let a = arr[0];
// let b = arr[1];

let [a, b] = useState();
console.log("-----------  a----------->", a);
console.log("-----------  b----------->", b);

function useState() {
    let x = 30;
    let y = 60;
    return [x, y]; //[30,60]
    
}


let arr = [10, 30, 50];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

let [a, b, c, d] = arr;
console.log("-----------  d----------->", d);

console.log("-----------  a----------->", a);
console.log("-----------  b----------->", b);
console.log("-----------  c----------->", c);
*/

/*
function getUser() {
  return ["Urvish", 23];
}

// without destructure
// let user = getUser();
// console.log("-----------  user----------->", user);

// console.log(`My name is ${user[0]} and i am ${user[1]} years old`);

let [name, age] = getUser();
console.log(`My name is ${name} and i am ${age} years old`);

*/

/*
function sum([x, y]) {
  console.log("-----------  y----------->", y);
  console.log("-----------  x----------->", x);
  return x + y;
}

let arr = [100, 200];

let total = sum(arr);
console.log("-----------  total----------->", total);
*/

let obj = {
  name: "urvish",
  age: 23,
};

// let name = obj.name;
// let age = obj.age;

// let { Age, name, age } = obj;
// console.log("-----------  Age----------->", Age);

// console.log(`My name is ${name} and i am ${age} years old`);

// without destructuring
// function printUser(user) {
//   console.log(`My name is ${user.name} and i am ${user.age} years old`);
// }

// with destructring

function printUser({ name, age }) {
  console.log(`My name is ${name} and i am ${age} years old`);
}

printUser(obj);

// ek function return kar raha he obj {name,age,address:{city,pincode}}

// destructure kar k lena he and print karvana he
