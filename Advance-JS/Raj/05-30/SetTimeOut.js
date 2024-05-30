//  setTimeout -  If we want to perform some work after a certain amount of time but only once, then we should use setTimeout.
// setTimeout(() => {
//     console.log("--set time out-->");
// }, 5000);

//  setInterval - If we want to perform some work continuously at specific intervals until we decide to stop, then we should use setInterval

let id = setInterval(() => {
  console.log("--set interval out-->");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 5000);
