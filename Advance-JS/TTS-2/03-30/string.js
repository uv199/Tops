let str = "Hello  World World";
console.log("-----------  str----------->", str);
/*


//  concat - to join multiple string

let str2 = " ...urvish";
let joinstr = str.concat(str2, " test str");
console.log("-----------  joinstr----------->", joinstr);

//  indexOf - find index by sub str

let index = str.lastIndexOf("ll")
// let index = str.indexOf("l")
console.log("-----------  index----------->", index)

// upper case - to convert uppercase
let upper = str.toUpperCase();
console.log("-----------  upper----------->", upper);
// lower case - to convert lower case
let lower = str.toLowerCase();
console.log("-----------  lower----------->", lower);

let email = "urvish@gmail.com";
let email2 = "Urvish@gmail.com";

console.log("--->", email.toLowerCase() === email2.toLowerCase());


// trim - remove unnessesory space  from last and start

let str2 = "      test      "
let trimStr = str2.trim()
console.log("-----------  trimStr----------->", trimStr)
console.log("-----------  str2----------->", str2)


// replace  - replac string by substring

// let replaceStr = str.replace("World","urvish")
// let replaceStr = str.replaceAll("world","urvish")
let replaceStr = str.replaceAll(" ","---")
console.log("-----------  replaceStr----------->", replaceStr)

// slice = give sub string by index exept nagative value

// let sliceStr = str.slice(1, 5);
// let sliceStr = str.slice(1, -2);
// console.log("-----------  sliceStr----------->", sliceStr)

// subString = give sub string by index
// let subSt = str.substring(1,5)
let subSt = str.substring(1,-2)
console.log("-----------  subSt----------->", subSt,str[4])


// includes find sub string available or not and give ans in true/false 

let availabe = str.includes("lo  W")
console.log("-----------  availabe----------->", availabe)


// split -  make pieces by given sub str and return array
let arr = "urvish patel".split();
console.log("-----------  arr----------->", arr)
*/

// urvish => hsivru

let name = "urvish";
let arr = name.split("");
console.log("-----------  arr----------->", arr);
arr.reverse();
console.log("-----------  arr----------->", arr);
// let revStr = arr.toString()
let revStr = arr.join();
console.log("-----------  revStr----------->", revStr);


