let user = {
  name: "uv",
  age: 23,
  address: {
    pin: 395007,
    city: "surat",
  },
  hobby: ["hello", "test"],
};

// let name = user.name;
// let age = user.age;
let { age, Hobby, name } = user;

// console.log("-----------  name----------->", name);
// console.log("-----------  age----------->", age);
// console.log("-----------  Hobby----------->", Hobby);

// array

let arr = [100, 200, 300, 400];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];

let [b, c, d, a] = arr;
// console.log("-----------  a----------->", a);
// console.log("-----------  b----------->", b);
// console.log("-----------  c----------->", c);
// console.log("-----------  d----------->", d);

// without destructuring
// function funObj(obj) {
//   console.log("my name is ", obj.name);
//   console.log("my age is ", obj.age);
// }

//apply destructure
function funObj({ name, age }) {
  console.log("my name is ", name);
  console.log("my age is ", age);
}

funObj({ name: "urvish", age: 23 });

// function funArr(arr) {
//   console.log("-->arr[0]", arr[0]);
//   console.log("-->arr[1]", arr[1]);
// }

function funArr([a, b, c]) {
  console.log("-----------  c----------->", c);
  console.log("-->arr[0]", a);
  console.log("-->arr[1]", b);
}

funArr([1000, 3000]);


