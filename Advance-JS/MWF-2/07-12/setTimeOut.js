// setTimeout(() => {
//   console.log("----setTimeOut---->");
// }, 5000);

let id = setInterval(() => {
  console.log("----setInterVal---->");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 5000);
