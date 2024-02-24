let arr = [1, 25, 73, 4, 9];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  console.log("arr", arr[i]);
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("---->", max);

let marks = 50;
switch (true) {
  case marks <= 33:
    console.log("0000000");
    break;
  case marks <= 50:
    console.log("111111");
    break;
  default:
    console.log("222222");
    break;
}
