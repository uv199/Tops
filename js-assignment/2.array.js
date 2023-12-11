/*
// [1,2,100,3,300,100,1,5,6]
-> create array which have 1 to 9 no 

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
by use of loop

*/

function replaceValue(arr, index, value) {
  arr[index] = value;
  // change a value of 6th index with 100
  return arr;
}
function sumOfAllArrEle(arr) {
  let sum = 0;
  arr.map((e) => {
    sum += e;
  });
  return sum;
}

let x = [1, 2, 3, 4, 5];
let total = sumOfAllArrEle(x);

// dta = {
//   name,
//   age,
//   adderess: {
//     city,
//     state,
//     pincode,
//   },
// };
