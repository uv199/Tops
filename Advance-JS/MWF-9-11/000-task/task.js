let str = "urvish v patel";
let arr = str.split(" ").reverse().join(" ");
console.log("🚀 ~ file: task.js:3 ~ arr:", arr);
// arr.reverse();
// let str2 = arr.join(" ");
// console.log("🚀 ~ file: task.js:5 ~ str2:", str2);

// stop watch

let x = 0;
let id;
function start(params) {
  id = setInterval(() => {
    x++;
  }, 1000);
}

function stop(params) {
  clearInterval(id);
}
