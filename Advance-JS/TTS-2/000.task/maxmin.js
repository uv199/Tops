let arr = [1, 25, 73, 4, 9];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  console.log("arr", arr[i]);
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("---->", max);

