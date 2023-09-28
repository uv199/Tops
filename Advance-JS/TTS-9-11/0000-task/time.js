// const id = setInterval(() => {
//   for (let i = 1; i < Infinity; i++) {
//     console.log(i);
//   }
// }, 2000);
function time() {
  let i = setInterval(() => {
    let current = new Date();
    let time = current.getMinutes();
    let hors = current.getHours();
    let second = current.getSeconds();
    console.log(`current Time----> ${hors}:${time}:${second}`);
  }, 1000);

  setTimeout(() => {
    clearInterval(i);
  }, 1000 * 60 * 5);
}

time();
