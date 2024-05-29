/*
parash =>
10. do sum of all value of an array with use of map, reduce and for-loop
13. reverse an array with use of for-loop
task-2
[1,2,3,6,7,9,3,56,8]
1. give all value which can devided by 2 use filter
2. give all value above 3 by use of filter
3. give index of 56
4. give true/false result when check given value is exists in array or not

1. ['i','am', 'urvish'] ==> want ['urvish','am','i']
by use of map and loop
2. ['i','am', 'urvish'] want "i am urvish" without use join method

=> rahul all
=> mahesh all
=> ibrahim all
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ['i','am', 'urvish'] ==> want ['hsivru','ma','i'] by use of loop

let a = ["i", "am", "urvish"];

let ans = a.reverse(); // point 1 =  [ "urvish", "am", "i"]

for (let i = 0; i < ans.length; i++) {
  const ele = ans[i]; // point 2 = "urvish" => one single word of array
  let arr = ele.split("").reverse().join(""); // point 3 = "hsivru", => reverse all word
  ans[i] = arr; // point 3 = replace that word in array
}

console.log("-----------  ans----------->", ans);

const data = [
  {
    name: "urvish",
    marks: [
      { subject: "English", marks: 50 },
      { subject: "Hindi", marks: 80 },
      { subject: "Maths", marks: 90 },
    ],
  },
];
