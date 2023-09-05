/*
// var----->

var x = 100000;
console.log(" x:", x);
x = 10;
var x = 100;
console.log(" x:", x);

// let ----->

// console.log("y:", y); // give error = Cannot access 'y' before initialization
let y;
// let y; // Identifier 'y' has already been declared
y = 100;
console.log("y:", y);
{
    {
        let m = 100;
    }
    {
        console.log("🚀 ~ file: variable.js:19 ~ m:", m);
    }
}
*/

// const

// const z //Missing initializer in const declaration
// console.log("🚀z:", z) // Cannot access 'z' before initialization

const z = 100;
console.log("🚀z:", z);
// z = 500;//  Assignment to constant variable.
{
  {
    const z1 = 900;
    {
      const z1 = 1000;
      console.log("z1", z1);
    }
  }
}
