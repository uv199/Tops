setTimeout(() => {
  console.log("setTimeOut---->");
}, 5000);

let id = setInterval(() => {
  console.log("setInterval---->");
}, 2000);
// setInterval(() => {
//   console.log("setInterval---->  2");
// }, 2000);
// console.log("id :", id);
setTimeout(() => {
  clearInterval(id);
}, 5000);
