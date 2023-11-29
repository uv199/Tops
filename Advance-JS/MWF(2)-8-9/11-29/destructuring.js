let user = {
  name: "urvish",
  age: 23,
};

// let name = user.name;
// let age = user.age;

// key name must be same
let { name, age, Test } = user;

// console.log("name", name);
// console.log("age", age);
// console.log("Test", Test);

function fun(params) {
  return { name1: "urvish", age1: 30 };
}

// letobj = fun();
// console.log("name is ", obj.name1);
// console.log("age is ", obj.age1);

let { name1, age1 } = fun();
console.log("name is ", name1);
console.log("age is ", age1);

// ----------------------------array-----------------

let arr = [100, 200, 300];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// let [b, a, c] = arr;

console.log("a", a);
console.log("b", b);
console.log("c", c);
