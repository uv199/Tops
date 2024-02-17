/*
var x = 200;
x = 400; // can chnage value
var x = 300; // use same name for multiple variable
var x2; // not need to give intial value
// => can suport hoisting
// global scope

let y = 100;
// let y = 100 // can't use same name for multiple varible
y = 500; // can chnage value
let y2; // not need to give intial value
// => can not suport hoisting
// block scope

// const z  ; //need to give intial value
const z = 100;
z = 300; //  can not chnage value
// const z = 20  // can't use same name for multiple varible
console.log("-----------  z----------->", z);
// => can not suport hoisting
// block scope
*/

{
  var x = 100;
}
// console.log("-----------  x----------->", x);

{
  const y = 100;
  {
    console.log("-----------  y----------->", y);
  }
}
