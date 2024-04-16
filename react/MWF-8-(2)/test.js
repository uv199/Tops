/*
// let doneTask = [1, 2, 3, 4, 5, 6];

// let arr = [];
// for (let i = 0; i < doneTask.length; i++) {
//   arr.push(i);
// }
// setDoenSelect(arr);

// setPendingTask(doneTask);

let pendingTask = ["A", "B", "C", "D"];
let doneTask = ["E"];
let pendingSelected = [0, 2,3];

let selectedPending = pendingTask.filter((e, i) => {
  return pendingSelected.includes(i);
});
doneTask = [...doneTask, ...selectedPending];
// console.log("-----------  doneTask----------->", doneTask)

let restPending = pendingTask.filter((e, i) => {
  return !pendingSelected.includes(i);
});
// console.log("-----------  restPending----------->", restPending)

pendingTask = restPending
console.log("-----------  doneTask----------->", doneTask)
console.log("-----------  pendingTask----------->", pendingTask)

*/
let arr = [1, 2, 3, 4, 5, 6];
let add = arr.toSpliced(1, 2, 20, 30);
console.log("-----------  add----------->", add)
console.log("-----------  arr----------->", arr);

/*
let vs var vs const
hoisting
copy refrence
spred/rest operator
destructure
method - array math string number onject
json
date object 
setTimeOut vs setInterval
call back / cb - Hell
promise
try catch
async await
function normal vs fat-arrow
recursion // 
currying
HOF
clouser
Nullish coalescing operator
this key word
Optional chaining
Generators
Modules

*/

