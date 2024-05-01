/*
let var cont

reassign => chnage a value
redeclear => make a multiple variable with same name
intial value => need to give intial value
hoisting => can use before declear
scope => scope of users


// let
// reassign => yes
// redeclear => no
// intial value => no
// hoisting => no
// scope => block

let a; // not need to give itial value
a = 20; // can chnage value

{
    let b = 800
  {
      let b = 90;
    }
    console.log("-----------  b----------->", b);
}

// const
// reassign => no
// redeclear => no
// intial value => yes
// hoisting => no
// scope => block
const a = 90;
// a = 900; 

*/

// var
// reassign => yes
// redeclear => yes
// intial value => no
// hoisting => yes
// scope => global

var a = 90;
a = 900;
var a;
{
  var b = 900;
}
console.log("-----------  b----------->", b);

/*

function
string => template litrals
array => how to access value 
object => how to access value

*/
