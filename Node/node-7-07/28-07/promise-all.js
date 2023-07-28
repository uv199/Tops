let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("----p1----");
    resolve("p1---->");
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("----p2----");
    resolve("p2---->");
  }, 5000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("----p3----");
    resolve("p3---->");
  }, 1000);
});

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});

// p1.then((res) => {
//   console.log(res);
// });
// p2.then((res) => {
//   console.log(res);
// });
// p3.then((res) => {
//   console.log(res);
// });

//https://www.scaler.com/topics/images/javascript-promise-all-method-fi.webp
/*

langu 2 acc atm 3 4 2 date 1 
*/
