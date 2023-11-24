let x = 0; // 0-null-undefined-false
// let y = x || 999;
let y = x ?? 999; // null-undefined
console.log("y", y);

if (x || x === 0) {
  console.log("------>hello ");
}

