let pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("---->5");
    resolve("--5");
  }, 5000);
});
let pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("======>4");
    resolve("--4");
  }, 3000);
});

Promise.all([pro1, pro2]).then(function (values) {
  console.log(values);
});
