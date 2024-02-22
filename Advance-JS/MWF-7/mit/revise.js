let x = 0; // "",false,0,undefined,null

if (x) {
  console.log("x have value", x);
}

let y = 100;
if (y < 33) {
  console.log("------1-----");
} else if (y < 50) {
  console.log("------2-----");
} else if (y < 70) {
  console.log("------3-----");
}

let obj = {
  name: "urvish",
  age: 23,
  1: "one",
  "first name": "patel",
};

let arr = [1, 2, 3, 4, 5];

// for (const key in arr) {
//   console.log("-----------  key----------->", key);
// }

// for (const val of arr) {
//     console.log("-----------  val----------->", val)
// }

// for (const key in obj) {
//   console.log("-----------  key----------->", key, obj[key]);
// }
// console.log("-----------  key----------->", obj["first name"]);
// console.log("-----------  key----------->", obj[1]);

function fun(a, b, c) {
  console.log("-----------  c----------->", c);
  console.log("-----------  b----------->", b);
  console.log("-----------  a----------->", a);
}

fun(null, null, 10);
