let PROMISE = new Promise((resolve, reject) => {
  reject("hello im am resolve");
});

PROMISE.then((res) => {
  console.log("----res--->", res);
}).catch((err) => {
  console.log("----err--->", err);
});
