setTimeout(() => {
  console.log("-------setTimeOut------");
}, 5000);

let id = setInterval(() => {
  console.log("-----------  setInterval----------->");
}, 2000);

console.log("------");
setTimeout(() => {
  clearInterval(id);
}, 10000);

// 5 => 01010 => loop
// "4322052" => loop
// is prime number or not => video
// pelendrom string  or not => video
