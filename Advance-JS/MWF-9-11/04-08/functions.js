function fun(params) {
  console.log("----->");
}
fun();
fun();

let x = 10;
let y = 20;
let m = 20;
let n = 20;
let z = x + y;

function sum(no1 = 0, no2, no3) {
  console.log("sum ~ no1:", no1, no3);
  console.log(no1 + no2);
}

// sum(50, x, y);
// // sum(m, n);

// let mno = function (no1 = 0, no2, no3) {
//   console.log("mno---->");
// };

// mno();

//

function fun3(a, b) {
  console.log("--fun3--");
  //   return a + b; // you can return ohnly one value
}

let total = fun3(10, 20);
console.log("total:", total);

//

// let fatArrowFun = () => {
//   console.log("----fatArrowFun");
//   return "bhai return";
// };
let fatArrowFun = (a, b) => a + b;

let re = fatArrowFun(20, 40);
console.log("3 ~ re:", re);
