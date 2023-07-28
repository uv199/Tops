setTimeout(() => {
  console.log("---set time out--->");
}, 2000);

let id = setInterval(() => {
  console.log("---interval--->");
}, 1000);

setTimeout(() => {
  clearInterval(id);
  console.log("----time clear-->");
}, 5000);

// make a watch -> setInterval/ func / date
fun;
