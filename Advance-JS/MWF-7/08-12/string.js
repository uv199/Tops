let str = "Hello World";
console.log("-----------  str----------->", str);

/*
// concat()	It provides a combination of two or more strings.

let str2 = " urvish"
let concatString = str.concat(str2," Patel")
console.log("-----------  concatString----------->", concatString)

*/

/*
// indexOf()/lastIndexOf()	It provides the position of a char value present in the given string.
// let index = str.indexOf("o")
// let index = str.lastIndexOf("lo")
let index = str.lastIndexOf("World ")
console.log("-----------  index----------->", index)

let x = "hello world";

let index = x.indexOf("o");
let lastIndex = x.lastIndexOf("o");
console.log("index", index, "lastIndex", lastIndex);

if (index === lastIndex) {
  console.log("o is not repeate");
} else {
  console.log("o is repeating");
}

// replace()	It replaces a given string with the specified replacement.
let str3 = str.replace(/[ol]/g, "*");
// let str3 = str.replaceAll("lo", "*");
console.log("-----------  str3----------->", str3);
*/

/*
// substring()	It is used to fetch the part of the given string on the basis of the specified index.
let subStr = str.substring(2,5) 
console.log("-----------  subStr----------->", subStr)


// slice()	It is used to fetch the part of the given string. It allows us to assign positive as well negative index.

// let sliceString = str.slice(2,-2)
let sliceString = str.slice(5,-7)
console.log("-----------  sliceString----------->", sliceString)
*/

/*
// toLowerCase()	It converts the given string into lowercase letter.
let lower = str.toLowerCase();
console.log("-----------  lower----------->", lower)

// toUpperCase()	It converts the given string into uppercase letter.
let upper = str.toUpperCase();
console.log("-----------  upper----------->", upper)

let name1 = "urvish";
let name2 = "Urvish";

if (name1.toLowerCase() === name2.toLowerCase()) {
  console.log("Match user found");
} else {
  console.log("Match user does not found");
}

*/
/*

// trim()	It trims the white space from the left and right side of the string.

let str2 = "     test      ";
console.log("-----------  str2----------->", str2)
let trimStr = str2.trim()
console.log(str2.length)
console.log("-----------  trimStr----------->", trimStr.length)

*/

// split()	It splits a string into substring array, then returns that newly created array.


// let arr = str.split("lll")
// let arr = str.split("l")
let arr = str.split("")
console.log("-----------  arr----------->", arr)
