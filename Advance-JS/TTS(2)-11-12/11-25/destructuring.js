let user = {
  name: "urvish",
  age: 23,
};

// let name = user.name;
// let age = user.age;

let { Age, age, name } = user;
console.log("Age", Age);
console.log("age", age);
console.log("name", name);

// -------------------array---------------------

let arr = [10, 20, 30];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
let [b, a, c] = arr;

console.log("a", a);
console.log("b", b);
console.log("c", c);

