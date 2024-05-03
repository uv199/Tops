/*
let arr = [10, 20, 30];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

let [a, b, c, d] = arr;
console.log("-----------  a----------->", a);
console.log("-----------  b----------->", b);
console.log("-----------  c----------->", c);
console.log("-----------  d----------->", d);


let obj = {
    str: "string",
    no: 12,
};

// let str = obj.str;
// let no = obj.no;

let { no, str, No } = obj;

console.log("-----------  str----------->", str);
console.log("-----------  no----------->", no)
console.log("-----------  No----------->", No);

*/


// function print(obj) {
//     console.log("name", obj.name);
//     console.log("age", obj.age);
//   }
  
function print({ name, age }) {
  console.log("name", name);
  console.log("age", age);
}

// print({ name: "urvish", age: 23 });

function responseData() {
  return { name: "urvish", age: 23 };
}

// let data = responseData()
// console.log("-----------  data----------->", data)
// console.log("name", data.name);
// console.log("age", data.age);

let { name, age } = responseData();
console.log("name", name);
console.log("age", age);
