/*
// var
var a; // not compulsory to give intial value
a = "test"; // can chnage value
var a = 10; // can redeclier

console.log("-----------  a2----------->", a2);
var a2 = "hello world"; // support hoisting
console.log("-----------  a2----------->", a2);

// let
let x; // not compulsory to give intial value
x = 20; // can chnage value
// let x  // can not redeclier

console.log("-----------  x2----------->", x2); // generate error Cannot access 'x2' before initialization
let x2 = 90; // not support hoisting
console.log("-----------  x2----------->", x2);

// const

// const z  //  compulsory to give intial value
const z = 20; // can't change value
// z = 20; // err  Assignment to constant variable
// const z = 10 // can not redeclier

console.log("-----------  z2----------->", z2);
const z2 = "hello world..!"; // not support hoisting
console.log("-----------  z2----------->", z2);
*/

//---------------------scop---------------

// let

/*
{
  //   let x = 10;
  //   let x = 200
  {
    // console.log("-----------  x----------->", x);
    let x = 100;
    // x = 100;
    console.log("-----------  x----------->", x);
  }
  {
    console.log("-----------  x----------->", x);
  }
}

// const
{
  const y = 600;
  {
      const y = 90;
      
      console.log("-----------  y----------->", y);
    }
}
// console.log("-----------  y----------->", y); // throw error


console.log("-----------  b----------->", b);
{
  var a = 10;
  {
      var b = 20;
    }
}
console.log("-----------  b----------->", b);

console.log("-----------  a----------->", a);

*/
