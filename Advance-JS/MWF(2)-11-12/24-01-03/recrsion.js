console.log(new Date().getTime());

function fun(x) {
  if (x > 0) {
    console.log("--->", x);
    fun(x - 1);
  }
}
// for (let i = 0; i < 10; i++) {
//   console.log("--->", i);
// }

fun(10);
console.log(new Date().getTime());

// function printArr(arr) {
//     console.log("-----------  arr[0]----------->", arr);
//   if (arr.length > 0) {
//     arr.shift();
//     printArr(arr);
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// printArr(arr);
