let arr = ["urvish", "patel"]; // =>

arr.reverse();
console.log(arr);
let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let chArr = arr[i].split("");
//   chArr.reverse();
//   let reverseWord = chArr.join("");
//   newArr.push(reverseWord)
// }

for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i].split("").reverse().join(""));
}

console.log("-----------  newArr----------->", newArr);
