let str = "Hello World";

let l = str.length;
console.log(" l:", l);

// concat()	It provides a combination of two or more strings.
// let x = " ... hii!";
// let nstr = str.concat(x);
// console.log("nstr:", nstr);

// indexOf()	It provides the position of a char value present in the given string.
// let x = str.indexOf(" world");
// console.log("x", x);

// replace()	It replaces a given string with the specified replacement.
// let x = str.replace("hello", "hii");
// console.log("x:", x);

// substring()	It is used to fetch the part of the given string on the basis of the specified index.
// let x = str.substring(2, 5);
// console.log("x:", x);

//slice()	It is used to fetch the part of the given string. It allows us to assign positive as well negative index.
//  "hello world";
// let x = str.slice(2, -1);
// console.log("x:", x);

// toLowerCase()	It converts the given string into lowercase letter.
// let lowerStr = str.toLocaleLowerCase();
// console.log(" lowerStr:", lowerStr);

// toUpperCase()	It converts the given string into uppercase letter.
// let uperStr = str.toUpperCase();
// console.log(" uperStr:", uperStr);

// trim()	It trims the white space from the left and right side of the string.
let s = "      tuiewgfjw     ";
console.log(" s:", s.trim());

// split()	It splits a string into substring array, then returns that newly created array.

let arr = str.split("");
console.log("arr:", arr);

let newArr = arr.reverse();
let newStr = newArr.join("");

let resStr = str.split("").reverse().join("");
console.log("🚀 ~ file: string_method.js:49 ~ resStr:", resStr);
// console.log("🚀 ~ file: string_method.js:47 ~ newStr:", newStr);
// console.log("🚀 ~ file: string_method.js:46 ~ newArr:", newArr);

// "urvish v patel" => "patel v urvish"
