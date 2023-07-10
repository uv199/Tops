function function_Name(params) {
  // return
}
let x = 10;
let y = 10;
let x1 = 10;
let y1 = 10;

// console.log(x + y);
// console.log(x1 + y1);

function sum(n1, n2) {
  //   console.log(n1 + n2);
  let total = n1 + n2;
  return total;
}

sum(x1, y1);
let a = sum(x, y);
console.log("a :", a);

// ---------------------------------------------------------------------------------------------

let test = function () {
  console.log("=====");
};
test();

// ---------------------------------------------------------------------------------------------

let fatArrowFun = () => {
  console.log("=--=-=-=-=-=");
};
fatArrowFun();
