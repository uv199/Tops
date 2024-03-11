// console.log("-----------  a----------->", a)
let a = 100;

// console.log("-----------  b----------->", b) // Cannot access 'b' before initialization
const b = 300;

// console.log("-----------  c----------->", c)
var c = 400;

// normalFunction();
function normalFunction(params) {
  console.log("-----------  normalFunction----------->");
}

fatArrowFun();
const fatArrowFun = () => {
  console.log("-----------  fatArrowFun----------->");
};
