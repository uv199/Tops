// setTimeout(() => {
//   console.log("-----------  setTimeout----------->");
// }, 5000);

let id = setInterval(() => {
  console.log("-----------  setInterval----------->");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 5000);
