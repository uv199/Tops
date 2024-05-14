// setTimeout(() => {
//   console.log("-----------  setTimeout----------->");
// }, 5000);

let id = setInterval(() => {
  console.log("-----------  setTimeout----------->");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("-----------  clearInterval----------->");
}, 5000);
