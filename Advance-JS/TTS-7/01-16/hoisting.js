// var x2

// console.log("value--->", x); // give err -> Cannot access 'x' before initialization
// let x = 100;

// console.log("-----------  200----------->", y); // undefined
// var y = 200;

// console.log("-----------  z----------->", z)
// const z = 200

// console.log("-----------  x2----------->", x2)
// var x2 = 100
// let x2 = 100

{
  //   let test = "test";
  {
    let test = "test-child";
  }
  console.log("-----------  test----------->", test);
}
