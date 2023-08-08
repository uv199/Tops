let pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("my name is this...001");
  }, 1000);
});

let pro1 = new Promise((resolve, reject) => {
  throw new Error("=====>-----");
  resolve("my name is this...002");

  //   setTimeout(() => {
  //     resolve("my name is this...002");
  //   }, 3000);
});

let pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("my name is this...003");
  }, 4000);
});

// pro.then((res) => {
//   console.log("---->pro", res);
// });
// pro1.then((res) => {
//   console.log("---->pro1", res);
// });
// pro2.then((res) => {
//   console.log("---->pro2", res);
// });

Promise.all([pro, pro1, pro2])
  .then((res) => {
    console.log("--pro all->", res);
  })
  .catch((err) => {
    console.log(" err:=====>", err);
  });
