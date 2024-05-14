/*
function print(params) {
  console.log("test-1");
  console.log("test-2");
  console.log("test-3");
  return "test";
}

let returnVal = print();
console.log("-----------  returnVal----------->", returnVal);
console.log("--------------------");
print();

function sum(val1, val2) {
  console.log("-----------val1, val2----------->", val1, val2)
  return val1 + val2;
}

// 

let total = sum(15,15)
let total2 = sum(null,150)
// console.log("-----------  total----------->", total)
// console.log("-----------  total2----------->", total2)

// const print2 = () => console.log("-------fat arrow----->");
const print2 = () => "test";
let str = print2();
console.log("-----------  str----------->", str);

*/

// print()
function print(params) {
  console.log("----------- print ----------->");
}

print2();
const print2 = (params) => {
  console.log("----------- print-2 ----------->");
};
