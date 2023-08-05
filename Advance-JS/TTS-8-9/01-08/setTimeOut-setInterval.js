setTimeout(() => {
  console.log("Hello, World!");
}, 3000);

let id = setInterval(() => {
  console.log("This is an interval");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 6000);
