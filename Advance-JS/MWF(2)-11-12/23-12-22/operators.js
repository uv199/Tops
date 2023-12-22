console.log(10 == "10"); // check only value

console.log(10 === "10"); // check value and data type both

console.log(20 != "20"); // check only value
console.log(20 !== "20"); // check value and data type both

// && all condition should be true
// || just one condition should be true then it will return true

let x = 0;
// it will reperasent x's value should not be null/undefine/0/false
if (x || x === 0) {
  console.log("x is ", x);
}

// it will reperasent x's value should be null/undefine/0/false
if (!x) {
  console.log("x ! is ", x);
}
