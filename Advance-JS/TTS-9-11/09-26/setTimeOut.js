setTimeout(() => {
  console.log("-----setTimeOut  ---->");
}, 3000);

const id = setInterval(() => {
  console.log("-----setInterval  ---->");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 9000);
