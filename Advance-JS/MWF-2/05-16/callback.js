function fun1(params) {
  console.log("fun----1");
}
function fun2(params) {
  console.log("fun----2");
}

// fun1(fun2)

fun1(() => {
  console.log("fun-----2");
});

// call back function is a function which pass in another function as argument

// asyncronus operation ne syncronus karava mate

let arr = [1, 2, 3, 54, 6, 3, 1];

let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

let arr2 = [3, 5, 7, 10];
let ans = [];
for (let i = arr2[0]; i <= arr2[arr2.length - 1]; i++) {
  if (!arr2.includes(i)) {
    ans.push(i);
  }
}

console.log("-----------  ans----------->", ans);
