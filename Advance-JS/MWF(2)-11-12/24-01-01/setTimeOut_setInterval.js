// setTimeout(() => {
//   console.log("after 2 sec------>");
// }, 5000);

let id = setInterval(() => {
  console.log("-----set interval----->");
}, 1000);

setTimeout(() => {
    console.log("-----------  id----------->");
    clearInterval(id);
}, 5000);
