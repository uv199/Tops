/*
var
let
const

// re-assign => can chnage value
// re-declier => same name na 2 varibale banavi sakiye
// intital value => jyare declier kariye tyare value compulsory apvi pade
// hoisting => declier before use
// scope => {} => block

// var a
// var a = 200
// var a = 300
var a = 600;
a = 999;

console.log("-----------  a----------->", a);

{
    var s = 200;
}
console.log("-----------  s----------->", s);

{
    let s2 = 400;
    {
        let s2 = 300;
        console.log("-----------  s2----------->", s2);
    }
}


let v;
// let v  // cant make use same name
v = 400;
console.log("-----------  v----------->", v);


const s = undefined;
console.log("-----------  s----------->", s);
*/

let s = "test";
let s2 = "test";
let s3 = `test



`;
// console.log("-----------  s3----------->", s3);
// console.log("----------- ");

let name = "urvish";
// let str = "my name is " + name + "and my age is " + 5;
let str = `my name is ${name} and my age is ${5}`;
console.log("-----------  str----------->", str);

let nameArr = ["urvish", "nirali", "jatin"];

for (let i = 0; i < nameArr.length; i++) {
  console.log(`my name is ${nameArr[i]}.`);
  console.log("my name is " + nameArr[i] + ".");
}
