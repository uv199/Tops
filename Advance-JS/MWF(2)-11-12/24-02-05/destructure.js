let obj = {
  name: "urvish",
  age: 23,
  city: "surat",
};

// let name = obj.name;
// let age = obj.age;
// let city = obj.city;

let { name, City, age, city } = obj; // key name
// console.log("-----------  city----------->", city);
// let City
// console.log("-----------  name----------->", name);
// console.log("-----------  age----------->", age);
// console.log("-----------  city----------->", City);

// array = position

let arr = [1, 2, 3];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

let [a, c, b, d] = arr;
// console.log("-----------  d----------->", d);
// console.log("-----------  a----------->", a);
// console.log("-----------  b----------->", b);
// console.log("-----------  c----------->", c);

// normal
// function print(obj) {
//   console.log("my name is ", obj.name);
//   console.log("my age is ", obj.age);
// }

// destructure
// mnake in array
function print({ name, age }, id) {
  console.log("-----------  id----------->", id);
  console.log("my name is ", name);
  console.log("my age is ", age);
}

// print({ name: "urvish patel", age: 23 }, 1000);

//  array


// mnake in object 
function dataReturn() {
  return [1, 2, 3];
}

let [x, y] = dataReturn(1);
console.log("-----------  x----------->", x)
console.log("-----------  y----------->", y)
// console.log("-----------  arr2----------->", arr2);
