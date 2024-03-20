let x = undefined; // null--undefied--0--false-""

let y = x ?? 200;
// let y = x || 200;
// console.log("-----------  y----------->", y);

let data = 0;
if (data || data === 0) {
  // variable should not contain falsy value
  console.log("have data");
} else {
  console.log("don't have data");
}
