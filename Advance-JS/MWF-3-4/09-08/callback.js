function printName(callBack) {
  setTimeout(() => {
    console.log("Urvish ");
    callBack();
  }, 2000);
}
function printsurName(params) {
  console.log("Patel");
}

printName(printsurName);
// printsurName();
