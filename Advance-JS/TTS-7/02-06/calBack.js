/*
function fun1() {
  setTimeout(() => {
    console.log("urvish");
  }, 2000);
}

function fun2() {
  console.log("patel");
}



fun1();
fun2();

*/
// call back
function fun1(callBack) {
  console.log("callBack----------->", callBack);
  setTimeout(() => {
    console.log("urvish");
    callBack("urvish");
  }, 2000);
}
// function fun2() {
//   console.log("patel");
//   return 12345;
// }
// fun1(fun2);

fun1((name) => {
  console.log("-----------  name----------->", name)
  console.log("patel");
  return 12345;
});


