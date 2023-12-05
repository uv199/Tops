function f1(callBack1, callBack2) {
  console.log("----------  callBack2----------->", callBack2);
  setTimeout(() => {
    console.log("Urvish");
    callBack1(callBack2);
  }, 1000);
}

function f2(cb) {
  console.log("patel");
  cb();
}

function f3(params) {
  console.log(" is my name");
}

// f1(() => {
//   console.log("patel");
// });

f1(f2, f3);
// f3();
// f2()
