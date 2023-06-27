function task1(a, callBack) {
  console.log("callBack :", callBack);
  // callback = task2
  //   a+10
  setTimeout(() => {
    console.log("task1");
    return callBack(a);
  }, 3000);
}

let task2 = () => {
  console.log("task2");
};

let x = 10;
// task1(x, task2);
// task2();

(function name(params) {
  console.log("testb ");
})();
