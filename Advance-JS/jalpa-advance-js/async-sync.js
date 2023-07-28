// a - asyncronus

console.log("test1 ");
setTimeout(() => {
  console.log("test2 ");
}, 3000);
console.log("test3  ");

// a - b - c -> syncronus
// a - c - b -> asyncronus
