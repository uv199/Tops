let str = "Hello Word";

let l = str.length;
console.log("l :", l);

console.log("str :", str[3]);

// concat()	It provides a combination of two or more strings.
// let s = str.concat("-test", "test");
// console.log("s :", s);

// indexOf()	It provides the position of a char value present in the given string.
// let index = str.indexOf("Word");
// console.log("index :", index);

//match() It searches a specified regular expression in a given string and returns that regular expression if a match occurs.
// let x = str.match("ello");
// console.log("x  :", x, x.index);

// replace()	It replaces a given string with the specified replacement.
// let mno = str.replace("Hello", "h");
// console.log("mno :", mno);
// console.log("str :", str);

//substring()	It is used to fetch the part of the given string on the basis of the specified index.
// let sub = str.substring(1, 4);
// console.log("sub :", sub);

// substr()	It is used to fetch the part of the given string on the basis of the specified starting position and length.
// let sub = str.substr(1, 4);
// console.log("sub :", sub);

// slice() 	It is used to fetch the part of the given string. It allows us to assign positive as well negative index.
// let x = str.slice(0, -4);
// console.log("x  :", x);

// toLowerCase() It converts the given string into lowercase letter.
// let abc = str.toLowerCase();
// console.log("abc :", abc);

//toUpperCase()	It converts the given string into uppercase letter.
// let abc = str.toUpperCase();
// console.log("abc :", abc);

// split()	It splits a string into substring array, then returns that newly created array.

// let arr = str.split("o W");
// console.log("arr :", arr);

// trim() It trims the white space from the left and right side of the string.

let s = "            test             ";
let m = s.trim();
console.log("s :", s);
console.log("s :", m);
