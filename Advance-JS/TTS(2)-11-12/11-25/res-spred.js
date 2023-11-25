let arr = [1, 2, 3, 4, 5];

// console.log(...arr)

let [a, b, ...c] = arr;
// let [a, ...c, b ] = arr; //not allow compulsory in define rest
console.log("a", a);
console.log("b", b);
console.log("c", c);

let user = {
  name: "urvish",
  age: 23,
  city: "surat",
  pincode: 395007,
};

let { name, age, ...adrress } = user;
// let { name, ...adrress, age } = user; // not allow compulsory in define rest last
console.log("adrress", adrress);
console.log("age", age);
console.log("name", name);

function printNumber(a, b, ...c) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
}
printNumber(1, 2, 3, 4, 5, 6);
