// ----------------------setTimeOut------------------------
setTimeout(() => {
  console.log("----setTimeout----->");
}, 5000);

// ----------------------setInterval------------------------
let id = setInterval(() => {
  console.log("----setInterval----->");
}, 2000);
// console.log("id", id);

setTimeout(() => {
  clearInterval(id);
}, 7000);
