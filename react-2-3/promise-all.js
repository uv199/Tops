let pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("pro---1");
  }, 5000);
});

let pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("pro---2");
  }, 3000);
});

let pro3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // throw new Error("------errro-------");
    resolve("pro---3");
  }, 4000);
});

// pro1.then((res) => {
//   console.log("res-pro1", res);
// });
// pro2.then((res) => {
//   console.log("res-pro2", res);
// });
// pro3.then((res) => {
//   console.log("res-pro3", res);
// });

Promise.all([pro1, pro2, pro3])
  .then((res) => {
    console.log("res :", res);
  })
  .catch((err) => {
    console.log("err----->", err);
  });
