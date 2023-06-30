/*

-> make one array who have value from 1 to 10

1. print 9th and 10th index of array
2. print every element of array by map and for loop
3. change a value of 6th index with 100
4. print a array till element value not grater then 100
5. add 1 in every element of an array
6. add 0 in start of array
7. add  99 in end of array
8. remove 1 element from start of  array
9. remove 1 element from end of array
10. do sum of all value of an array with use of map, reduce and for-loop
11. sort a array in acending decending
12. reverce an array with use of method
13. reverce an array with use of for-loop

// [1,2,3] => [3,2,1] [2,1]

___________________________________________________________________________________

task-2
[1,2,3,6,7,9,3,56,8]

1. give all value which can devided by 2 - not use filter
2. give all value above 3 by use of filter
3. give index of 56
4. give true/false result when check given value is exists in array or not

___________________________________________________________________________________

task-3
1. ['i','am', 'urvish'] ==> want ['urvish','am','i']
by use of map and loop
2. want "i am urvish" without use join method
___________________________________________________________________________________

task-4

['i','am', 'urvish'] ==> want ['hsivru','ma','i']
by use of map, loop

- [urvish , am ,i]
- urvish -> [u,r,v,i,s,h] -> [h,s,i,v,r,u] -> hsivru


*/

// let newArr = [];

// for (let i = 0; i < array.length; i++) {
//   newArr.unshift(arr[i]);
// }

// let array = [1, 2, 3, 6, 7, 9, 3, 56, 8];
// let data = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     data.push(array[i]);
//   }
// }
// console.log(data);

// let data1 = array.map((e) => {
//   return e % 2 === 0;
// });

// console.log("data1 :", data1);

// let arr = ["i", "am", "urvish"]; // ==> want ['urvish','am','i']
// let revArr = [];
// arr.reduce((last, e) => {
//   //   console.log("e :", e);
//   //   console.log("last :", last);
//   last ? revArr.unshift(e, last) : revArr.unshift(e);
//   //   last ? revArr.unshift(e, last) : revArr.unshift(e);
// });
// arr.reduce((last, e) => {
//   revArr.unshift(e);
// }, 0);

// console.log("revArr :", revArr);

// [1,2,4,6,9,3,4,6]

// if(arr[i]<100){
//   console.log(arr[i])
// }else { break }

// let total = 0;
// map((e) => {
//   total = +e;
// });

// -----------------------------------------------------------

// revStr = [];
// for (i = 0; i < arr.length; i++) {
//   arr[i] = arr[i].split("").reverse().join("");
// }

// ['i','am', 'urvish'] ==> want ['hsivru','ma','i']

let reversArr = ["urvish", "am", "i"];
let ansArr = [];
for (let i = 0; i < reversArr.length; i++) {
  let p1 = reversArr[i].split(""); // => ['a','m']
  console.log("p1 :", p1);
  let p2 = p1.reverse(); // =>['m','a']
  console.log("p2 :", p2);
  let p3 = p2.join(""); // => "ma"
  console.log("p3 :", p3);
  ansArr.push(p3); // push in new array ["am"]
}
console.log("ansArr :", ansArr);
