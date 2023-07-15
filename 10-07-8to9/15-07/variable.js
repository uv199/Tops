/* var a;
console.log("a:", a);
var b = 10;
var b = 20;
// b = 20;
console.log("b:", b);
// -------------------------------------

// console.log("x:", x); // give err
let x;
// let x // give err
x = 20;

// -------------------------------------

console.log(" test:", test); // Cannot access 'test' before initialization
const test = "";
// test = "test"; // give err - Assignment to constant variable.
console.log("🚀 ~ file: variable.js:18 ~ test :", test);
*/
//---------------------------------------------------------

// {
//   var a = 10;
//   let b = 10;
//   const c = 10;
//   {
//     console.log("a", a);
//     console.log("b", b);
//     console.log("c", c);
//   }
// }

{
  {
    var a = 10;
    let b = 10;
    const c = 10;
  }
  var a = 40;
  console.log("a", a);
  //   console.log("b", b);
  //   console.log("c", c);
}

// ------------------------------------------------------------
function f1(params) {
  let c = a + b;
  let mul;
  function f2(params) {
    mul = a * b;
  }
  return { sum: c, multiply: mul };
}

// -----------------------------------------------------------

{
  let a = 20;
  {
    let a = 10;
    console.log("🚀 ~ file: variable.js:63 ~ a:", a);
  }
}
