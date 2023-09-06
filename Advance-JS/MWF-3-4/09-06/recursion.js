function fun1(x) {
  //   console.log("🚀 ~ file: recursion.js:2 ~ fun1 ~ x:", x);
  console.log("--->", x[0]);
  if (x.length > 0) {
    x.shift();
    fun1(x);
  }
}
// function fun1(x) {
//   console.log("--->", x);
//   if (x >= 0) {
//     fun1(x - 1);
//   }
// }

fun1([1, 2, 3, 5]);
