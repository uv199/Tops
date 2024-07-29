// var
// let
// const

/*
reassign => chnage value
redecliar => use same name for multiple variable 
hosting => use before initalize
inital value => give intial value while decliaring
scope => 

*/

/*
not need to give intial value
can reassign
can redeclier
support hoisting
globle scope

// console.log("-----------  x----------->", x);
var x = 70;
x = 40;
var x = 700;
// console.log("-----------  x----------->", x);

{
    {
    var y = 500;
}
}
console.log("-----------  y----------->", y);

*/

/*

not need to give itnial value
can reassign
can not redeclier
hoisting not support
block scope



// console.log("-----------  x----------->", x)
let x;
x = 20;
// let x;

console.log("-----------  x----------->", x);


{
    let y = 900;
  {
    let y = 800;
}
{
    let y = 900;
    console.log("-----------  y----------->", y);
}
}

*/

/*
have to give itnial value
can not reassign
can not redeclier
hoisting not support
block scope


console.log("-----------  x----------->", x);
const x = 0;
x = 90;
// const x=60

function name(params) {
    let x = 60;
}

*/

{
  let y = 90;
  {
    console.log(y); // 1
    let y = 80;
    console.log(y); //2
  }
  console.log(y); //3
}


let obj = { a: 30 };

function print(obj) {
  obj.a = 900;
}

console.log(obj.a);
print(obj);
console.log(obj.a);


/*

destructure
rest spred
call back
HOF
promise

*/
