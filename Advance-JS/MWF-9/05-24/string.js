let str = "Hello World";
console.log(str);

/*
let ch1= str.charAt()
console.log("-----------  ch1----------->", ch1)
console.log(str[0])

// concat()	It provides a combination of two or more strings.

let name = " urvish"
let str2 = "...!"
let newStr = str.concat(name,str2)
console.log("-----------  newStr----------->", newStr)


// indexOf()	It provides the position of a char value present in the given string.
// let index = str.indexOf("w"); // -1
// let index = str.indexOf("W"); // 6
// let index = str.indexOf("l"); // 2 /// first matched element index
let index = str.indexOf("ello"); // 2 /// first matched element index

console.log("-----------  index----------->", index);


// lastIndexOf()	It provides the position of a char value present in the given string by searching a character from the last position.

// let index = str.lastIndexOf("l");
let index = str.lastIndexOf("ll");
console.log("-----------  index----------->", index)


// replace()	It replaces a given string with the specified replacement.

// let str2 = str.replace("l","|*|")
let str2 = str.replaceAll("l","|*|")
console.log("-----------  str2----------->", str2)


// substring()	It is used to fetch the part of the given string on the basis of the specified index.

let sbuString = str.substring(1,5)
console.log("-----------  sbuString----------->", sbuString)


// slice()	It is used to fetch the part of the given string. It allows us to assign positive as well negative index.

let sliceString = str.slice(1,-3)
console.log("-----------  sliceString----------->", sliceString)



// toLowerCase()	It converts the given string into lowercase letter.

let lower = str.toLowerCase()
console.log("-----------  lower----------->", lower)


// toUpperCase()	It converts the given string into uppercase letter.

let upper = str.toUpperCase()
console.log("-----------  upper----------->", upper)


let storedName = "Urvish"

let inputName = "urvish" 

if(inputName.toLowerCase()===storedName.toLowerCase()) {
  console.log("Name are same ")
}else{
  console.log("Name are diffrent")
}


*/

// split()	It splits a string into substring array, then returns that newly created array.

let str2 = "hello urvish,  how are your ?";

// let arr=str2.split(",")
// let arr=str2.split()
let arr = str2.split(" ");
// let arr=str2.split("how")
console.log("-----------  arr----------->", arr);

// trim()	It trims the white space from the left and right side of the string.

let str3 = "  hello  ";
let trimStr = str3.trim()
console.log("-----------  trimStr----------->",trimStr.length, trimStr)
console.log("-----------  str3----------->", str3.length, str3);
