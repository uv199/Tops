let obj = {
  a: 20,
  b: 30,
};

// let a = obj.a;
// let b = obj.b;
// let { a, c, b } = obj;
// console.log("-----------  c----------->", c);
// console.log("-----------  a----------->", a);
// console.log("-----------  b----------->", b);

// array

let arr = [1, 2, 3];

// let x = arr[0];
// let y = arr[1];
// let z = arr[2];
let [x, y, z, m] = arr;
// console.log("-----------  m----------->", m);
// console.log("-----------  x----------->", x);
// console.log("-----------  y----------->", y);
// console.log("-----------  z----------->", z);

function personalData(params) {
  return {
    name: "urvish",
    age: 23,
    city: "surat",
  };
}

function returnHobby(params) {
  return ["reading", "traveling"];
}
// function printData(params) {
//   let data = personalData();
//   console.log("-----------  data----------->", data);
//   console.log(
//     `My name is ${data.name}. i'm ${data.age} year old and i live in ${data.city}`
//   );
// }
function printData({ a, b }) {
  console.log("-----------  a----------->", a);
  console.log("-----------  b----------->", b);
  let { name, city, age } = personalData();
  console.log(`My name is ${name}. i'm ${age} year old and i live in ${city}`);

  let [hob1, hob2] = returnHobby();
  console.log(`i have two hobby 1st is ${hob1} and 2nd is ${hob2}`);
}
printData({ a: 20, b: 30 });

let data = { brandName: "xyz", model: "bdjas", price: 234 };
// test(data)
