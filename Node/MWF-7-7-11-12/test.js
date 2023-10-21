let no = 63;

// [1, 2, 4, 5, 10, 20];
let arr = [1, no];
let loopEnd = no / 2;
for (let i = 2; i < loopEnd; i++) {
  if (Number.isInteger(no / i)) {
    arr = i === no / i ? [...arr, i] : [...arr, i, no / i];
    loopEnd = no / i;
  }
}
console.log("arr", arr);
