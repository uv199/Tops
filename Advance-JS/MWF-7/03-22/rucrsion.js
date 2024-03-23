function print(x) {
  console.log("------>", x);
  if (x > 0) {
    print(x - 1);
  }
}

// console.log("-----------  startTime----------->", new Date().getTime());
// print(10);
// console.log("-----------  endTime----------->", new Date().getTime());

console.log("-----------  startTime----------->", new Date().getTime());
for (let i = 0; i < 11; i++) {
  console.log(i);
}
console.log("-----------  endTime----------->", new Date().getTime());
