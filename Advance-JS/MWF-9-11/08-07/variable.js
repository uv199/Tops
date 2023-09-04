// let
// var
// const

// var
// console.log(a); //  hoisting support
// {
//   //   var a = 10;
//   //   var a = 20; // redecl..
//   var a; // not have to give intial value
//   a = 50; // re asign..
// }
// console.log(a); // global scope

// let

// // console.log(a); //  not support hoisting
// {
//   let a; // not have to give intial value
//   //   let a  //cant redeclier give error
//   a = 25; // // re asign..
// }
// console.log(a); // block scope cant print
// {
//   {
//     let m = 50;
//   }
//   console.log(m);
// }

// const

{
  // const a // hvae to give value in intial... time
  const a = 20;
  // a = 50; // can't chnage value
  console.log("a :", a);
}

{
  const m = 50;
  {
    console.log(m);
  }
}
// console.log(a); // block scope cant print
