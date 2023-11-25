// let no = 63;

// // [1, 2, 4, 5, 10, 20];
// let arr = [1, no];
// let loopEnd = no / 2;
// for (let i = 2; i < loopEnd; i++) {
//   if (Number.isInteger(no / i)) {
//     arr = i === no / i ? [...arr, i] : [...arr, i, no / i];
//     loopEnd = no / i;
//   }
// }
// console.log("arr", arr);

// x = 4;
// function fun(params) {
//   var x = 40;
// }
// fun();

// let no = 1;

// for (let i = 0; no < 7; i++) {
//   let str = "";
//   for (let j = 0; j <= i; j++) {
//     str += `${no}`;
//     no++;
//   }
//   console.log(str);
// }

let str = "urvish";
let rev = "";
for (let i = 0; i < str.length; i++) {
  rev = str[i] + rev;
}

// console.log("rev", rev);

//

let num = 122820233;
// 1234 , 22 33 , 333

let numStr = num.toString();
let x = 0;

for (let i = 0; i < numStr.length; i++) {
  let no = numStr[i];
  let no2 = numStr[i + 1];
  let no3 = numStr[i + 2];
  let no4 = numStr[i + 3];

  if (no === no2) x++;

  let condition1 = +no + 1 === +no2 && +no + 2 === +no3 && +no + 3 === +no4;
  let condition2 = x === 2;
  let condition3 = no === no2 && no2 === +no3;

  if (condition1 || condition3 || condition2) {
    console.log("-------");
    break;
  }
}

let arr = [1, 2, 3];
let arr2 = [1, 2, 3];

// let arr2 = arr;
// console.log(arr.toString() == arr2.toString());
console.log(arr == arr2);

let obj = { a: 20, b: 30, c: 30 };
let obj2 = { b: 30, a: 20 };
console.log("obj", obj.toString());
console.log("obj2", obj2.toString());

console.log(obj.toString() == obj2.toString());
