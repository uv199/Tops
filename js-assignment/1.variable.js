/*
-> Want to re-use variable name so which variable declare method should i use

------------------------------------------------------------------------------------------

-> give the list which variable name not works in js
1. let a=0
2. let "a"=0
3. let 'a'=0
4. let `10`=0
5. let 1=0
------------------------------------------------------------------------------------------

let x = 100
// var y = 100
// const z = 100
// const m
{
      x= 90
      // y= 90
      // z= 90
      console.log(x) ___________________ point-x1
      console.log(y) ___________________ point-y1
      console.log(z) ___________________ point-z1
      console.log(m) ___________________ 
} 

console.log(x) ___________________ point-x2
console.log(y) ___________________ point-y2
console.log(z) ___________________ point-z2

what will print at x1-_______
what will print at y1-_______
what will print at z1-_______
what will print at x2-_______
what will print at y2-_______
what will print at z2-_______

------------------------------------------------------------------------------------------

-> task-2

console.log(x) ___________________ point-x2
console.log(y) ___________________ point-y2
console.log(z) ___________________ point-z2

{
      let x = 100
      var y = 100
      const z = 100
}

console.log(x) ___________________ point-x1
console.log(y) ___________________ point-y1
console.log(z) ___________________ point-z1


what will print at x1-_______
what will print at y1-_______
what will print at z1-_______
what will print at x2-_______
what will print at y2-_______
what will print at z2-_______

------------------------------------------------------------------------------------------

*/

let x = 100;
{
  x = 90;
  console.log(x);
}

var y = 100;
{
  y = 90;
  console.log(y);
}

/*

const m
console.log(m)

*/

const m = 10;
console.log(m) --> point-1;
m = 100;
console.log(m) --> point-2;


console.log(y);
var y = 100;  

console.log(y);
let y = 100;

/*

let x = 100;
let x = 200
console.log(x)

*/


