/*
// -------------------------LET----------------------------

// console.log("x", x); // can't suport hoisting give error
let x = 100;
x = 800; // reassign
// let x = 800; // redeclare
console.log("x", x);

{
  let x2 = 1000;
  console.log("---x--->", x);
  {
    let x3 = 100000;
    // console.log("x2-->before", x2);
    let x2 = 1000000000;
    console.log("x2-->after", x2);
  }
  //   console.log("x3", x3); // error
}
// console.log("x2", x2); // error

// -------------------------VAR----------------------------
// var y2;
// var y;

// console.log("y", y); // support hoisting
let y3;
var y = 200; // y=200
var y2 = 22200000;
// console.log("y", y);
{
    //   y = 2000; // can reassign
    //   var y = 20000; // can redeclare
    var y2 = 2000000;
}
console.log("y2", y2);

// -------------------------CONST----------------------------
// const z2 // give error  give intial value
// console.log("z", z); // can't suport hoisting give error
const z = 300;
// const z  // can't redeclare
// z = 900; // give error cant change value
console.log("z", z);

*/

{
  let x = 100;
  {
    let x = 900;
    // x = 900;
    console.log("--x-->", x);
    {
      console.log("--x-->", x);
      let x = 800;
    }
  }
  {
    console.log("--x-->", x);
  }
}
