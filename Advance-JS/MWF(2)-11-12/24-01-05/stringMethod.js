let str = "Hello World Urvish";
console.log("str->", str);

/*

// concat()	It provides a combination of two or more strings.
let str2 = "...?";
let str3 = "2024";
// let concatedStr = str.concat(str2);
// let concatedStr = str.concat(str2,str3);
let concatedStr = str.concat(str2,"-----", str3);
console.log("-----------  concatedStr----------->", concatedStr);


// indexOf() It provides the position of a char value present in the given string.
// let index = str.indexOf("l")
// let index = str.indexOf("l",4)
// let index = str.indexOf("ld u") // -1 => can't get same sub str
let index = str.indexOf("ld U") // 9
console.log("-----------  index----------->", index)


// lastIndexOf()	It provides the position of a char value present in the given string by searching a character from the last position.
let index = str.indexOf("l");
console.log("-----------  index----------->", index)
let lastIndex = str.lastIndexOf("ld U");
console.log("-----------  lastIndex----------->", lastIndex)


// replace()	It replaces a given string with the specified replacement.
// replaceAll()	It replaces all given string with the specified replacement.
// let replaceStr = str.replace("Urvish","____")
let replaceStr = str.replace("lllll","_") // can't chnage anything becuse there is not match string found
// let replaceStr = str.replaceAll("l","_")
console.log("-----------  replaceStr----------->", replaceStr);


// substring()	It is used to fetch the part of the given string on the basis of the specified index.
let subString = str.substring(1, 3);
console.log("-----------  subString----------->", subString)


// slice()	It is used to fetch the part of the given string. It allows us to assign positive as well negative index.

// slice vs subString => slice allowed nagative index but subtring not  

let subString = str.substring(1, 3);
let sliceStr= str.slice(5, -3);
console.log("-----------  subString----------->", subString)
console.log("-----------  sliceStr----------->", sliceStr)


// toLowerCase()	It converts the given string into lowercase letter.
let lower = str.toLowerCase();
console.log("-----------  lower----------->", lower);

// toUpperCase()	It converts the given string into uppercase letter.
let upper = str.toUpperCase();
console.log("-----------  upper----------->", upper);


// trim()	It trims the white space from the left and right side of the string.
let str2 = "     test  -----    ";
console.log("-----------  str2----------->", str2, str2.length);
let trim = str2.trim();
console.log("-----------  trim----------->", trim, trim.length);


// split()	It splits a string into substring array, then returns that newly created array.
// "hello world".split(" ") => [ "hellow","world"]
// let strSplit = str.split("l");
// let strSplit = str.split("");
// let strSplit = str.split(" ");
let strSplit = str.split("World ");
console.log("-----------  strSplit----------->", strSplit);


// ^[0-9]*$
let add = "1--2--a--b--c--7--9--o-";

// let x = add.replace(/\d+/g, "*");
// console.log("-----------  x----------->", x);

// let match = add.search("--a")
// let match = add.search(/\d+/g)
let match = add.search(/^[0-9]*$/)
console.log("-----------  match----------->", match)


// includes - find sub string and give result in boolen

let x = str.includes("Hello");
console.log("-----------  x----------->", x);
*/

let dEmail = "Uv@gmail.com";

let iEmail = "uV@gmail.com";

if (iEmail.toLowerCase() !== dEmail.toLowerCase()) {
  console.log("please cheack email");
} else {
  console.log("Login success....!");
}
