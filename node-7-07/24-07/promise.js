let testPro = new Promise((resolve, reject) => {
  let arr = [1, 2, 3, 4];
  if (arr.length % 2 === 0) resolve(arr);
  else reject("its not even");
  console.log("============>>>>>");
});

testPro
  .then((res) => {
    console.log("res------", res);
  })
  .catch((err) => {
    console.log("errr----", err);
  });

// let testPro = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("test");
//   }, 5000);
//   console.log("============>>>>>");
// });

// testPro;
// console.log("🚀 ~ file: promise.js:19 ~ testPro:", testPro);
