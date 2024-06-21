/*
var 
let
const 

redeclare => make 2 avribale with same name
reassign => chnage the value of variable
hoisting
need to give initial value 
scope 

1. var

- not need to give intial value
- can reassign 
- can redeclare
- support hoisting
- global scope

2. let 

- not need to give intial value
- can reassign 
- can not redeclare
- not support hoisting
- block scope


2. const

- need to give intial value
- can not reassign 
- can not redeclare
- not support hoisting
- block scope

*/

/*
console.log("-----------  x----------->", x);
var x;

x = 200;
var x;
console.log("-----------  x----------->", x);

{
    var x = 10;
}
console.log("-----------  x----------->", x);


// let y;
// let y
{
    let y = 20;
    // let y
    {
        let y = 10;
        console.log("-----------  y----------->", y);
    }
}

*/

const z = undefined;
z = 2000;
// const z
// let z

console.log("x");
{
  let x = 20;
  {
    x = 500;
  }
}
