/*

console.log("-----------  x----------->", x); // hoisting suported
// var x; // initial value not compulsory
// var x // redeclier
// var x = 100;
// x = 200; // reassign
console.log("-----------  x----------->", x);
var x = 200;
{
  {
    var x = 100;
  }
}
console.log("-----------  x----------->", x);

// const x // need to give intial value
// const x =100
// x="hello"  //can't reassign Assignment to constant variable
// const x ="300" // can't redclier
{
    const x = 1000;
    {
        const x = 500;
        console.log("-----------  x----------->", x);
    }
}

*/

// console.log("-----------  x----------->", x)
// let x // initial value not compulsory
// let x = 100; // not suport hoisting
// let x = 100; // can't redclier
// x = 400; // can reaasign

{
  let x = 900;
  {
    let x = 800;
    console.log("-s----------  x----------->", x);
  }
  {
    console.log("-s----------  x----------->", x);
  }
}
