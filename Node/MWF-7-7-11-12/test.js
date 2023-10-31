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

let no = 1;

for (let i = 0; no < 7; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += `${no}`;
    no++;
  }
  console.log(str);
}
