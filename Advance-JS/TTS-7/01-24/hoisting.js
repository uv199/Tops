console.log("-----------  a----------->", a);
var a = 200;

// console.log("-----------  x----------->", x)
let x = 200; // Cannot access 'x' before initialization

// console.log("-----------  y----------->", y);
// const y = 200; //// Cannot access 'y' before initialization

normalFun(200);
function normalFun(no) {
  console.log("-----------  normalFun----------->", no);
}


fatArrowFun(400);
const fatArrowFun = (no2) => {
  console.log("-----------  fatArrowFun----------->", no2);
};
