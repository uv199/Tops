let str = "Hello, World ll..!";

/*
// concat()	It provides a combination of two or more strings.

let str2 = str.concat(" urvish", " manoj");
console.log("🚀 ~ str2:", str2)

// indexOf()	It provides the position of a char value present in the given string.

// let index = str.indexOf("l")
// let index = str.indexOf("ll.")
let index = str.indexOf("ll.o")
console.log("🚀 ~ index:", index)

// lastIndexOf()	It provides the position of a char value present in the given string by searching a character from the last position.


let index = str.lastIndexOf("ll")
let index2 = str.indexOf("ll")
console.log("🚀 ~ index2:", index2)
console.log("🚀 ~ index:", index)


// substring()	It is used to fetch the part of the given string on the basis of the specified index.

let str2 = str.substring(0, 5)
console.log("🚀 ~ str2:", str2)


// slice()	It is used to fetch the part of the given string. It allows us to assign positive as well negative index.
let str3 = str.slice(-3, -6)
console.log("🚀 ~ str3:", str3)


// toLowerCase()	It converts the given string into lowercase letter.
let lower = str.toLowerCase();
console.log("🚀 ~ lower:", lower);

// toUpperCase()	It converts the given string into uppercase letter.

let upper = str.toUpperCase();
console.log("🚀 ~ upper:", upper);

let arr = ["Urvish", "manoj", "RaJ"];
let isAvailable = false;
let name = "urvish";
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log("🚀 ~ element:", element);
  if (element.toLowerCase() === name.toLowerCase()) {
    isAvailable = true;
    break;
  }
}

if (isAvailable) {
  console.log("name is available");
} else {
  console.log("name is not available");
}


// split()	It splits a string into substring array, then returns that newly created array.
let str2 = "Urvish v patel"
// let arr =  str2.split("i")
// let arr =  str2.split("v")
// let arr =  str2.split("")
// let arr =  str2.split(" ")
let arr =  str2.split("vis")
console.log("🚀 ~ arr:", arr)


// replace()	It replaces a given string with the specified replacement.

let str2 = "Urvish v patel"

//  let str3 = str2.replace(" ","--")
let str3 = str2.replaceAll(" ","--")
console.log("🚀 ~ str3:", str3)


//  includes = find that given substring is available in string or give the ans in boolean

// let ans = str.includes("w")
let ans = str.includes("Worl")
console.log("🚀 ~ ans:", ans)

*/

// match()	It searches a specified regular expression in a given string and returns that regular expression if a match occurs.

let str2 = "Urvish v patel"
let ans = str2.match("v")
console.log("🚀 ~ ans:", ans)

// search()  It searches a specified regular expression in a given string and returns the position of the match.

let ans2 = str2.search("")
console.log("🚀 ~ ans2:", ans2)
//  number math