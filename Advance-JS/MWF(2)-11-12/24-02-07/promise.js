// let willCome = new Promise((resolve, reject) => {
//   JSON.parse({ a: 20 });
//   resolve("I am Arrived");
//   //   reject("i ame not coming");
// });

// willCome
//   .then((response) => {
//     console.log("--res-->", response);
//   })
//   .catch((error) => {
//     console.log("--err-->", error.message);
//   });

let pendingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world...!");
  }, 2000);
});

// let msg = pendingPromise;
// console.log("-----------  msg----------->", msg);

// promise chaining
pendingPromise
  .then((response) => {
    console.log("--res-->", response);
    return "test res";
  })
  .then((res2) => {
    console.log("-----------  res2----------->", res2);
    console.log("--res-2-->");
    return "test res -2";
  })
  .then((res3) => {
    console.log("-----------  res3----------->", res3);
    console.log("--res-3-->");
  })
  .catch((error) => {
    console.log("--err-->", error.message);
  });
