/*
var a; // not need to give intial value
a = 200; // can chnage value - reassign
var a = 300; // can use same name for multiple varibale - redeclier
// console.log("-----------  a2----------->", a2);
var a2 = 900; // suport hoisting
// console.log("-----------  a----------->", a);

// global scop
{
  var a3 = 300;
}
console.log("-----------  a3----------->", a3);

// let -------->
let b; // not need to give intial value
b = 200; // can chnage value - reassign
// let b 
// can not use same name for multiple varibale - can't redeclier
// console.log("-----------  b2----------->", b2)
let b2 = 400; // not support hoisting
// console.log("-----------  b----------->", b);
// block scop
{
  let b3 = 800;
  {
    let b3 = 400;
    let b4 = 900;
  }
  console.log("-----------  b4----------->", b4);
  console.log("-----------  b3----------->", b3);
}

*/

// const c need to give intial value
const c = 200;
// c = 300; // can not chnage value - can't reassign
// const c  // can not use same name for multiple varibale - can't redeclier

{
  const c3 = 500;
  {
    const c3 = 0;
  }
}
console.log("-----------  c3----------->", c3);
