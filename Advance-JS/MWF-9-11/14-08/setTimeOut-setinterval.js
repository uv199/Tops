/*

setTimeout(() => {
  console.log("-setTime-out");
  5 + 5;
}, 1000);

let id = setInterval(() => {
  console.log("-setInterval----->");
}, 2000);
// console.log("🚀 ~ file: setTimeOut-setinterval.js:9 ~ id ~ id:", id)

setTimeout(() => {
  console.log("cleare---");
  clearInterval(id);
}, 5000);
*/
let ids;
let x = 0;
function timerStart(params) {
  ids = setInterval(() => {
    x++;
    console.log("x++:", x);
  }, 1000);
}

function stopeTimer(params) {
  clearInterval(ids);
}
timerStart();

setTimeout(() => {
  stopeTimer();
}, 5000);

/*
0.0 - 1.0
0.2 * 6 + 1 = 1.2  ---> 2.2
0.5 * 6 + 1 = 3.0  ---> 4.0
0.9 * 6 + 1 = 5.4  ---> 6.4
0.0 * 6 + 1 = 0.0  ---> 1.0
*/
