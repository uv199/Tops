let str = "urvishu";
let arr = ["a", "e", "i", "o", "u", "h"];

let str2 = "";
// console.log("-----------  str2----------->", str.length);
// for (let i = 0; i < str.length; i++) {
//   const ch = str[i];
//   let available = arr.includes(ch);
//   if (available) str2 += "0";
//   else str2 += ch;
// }
// console.log("-----------  str2----------->", str2);

for (let i = 0; i < arr.length; i++) {
  const vowel = arr[i];
  str = str.replaceAll(vowel, "0");
}
console.log("-----------  str----------->", str);
