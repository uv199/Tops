function getDate(count) {
  let date = new Date();
  let time = date.getTime(); // 100
  return new Date(time - count * 1000 * 60 * 60 * 24); // 80
}

let date = getDate(15);
console.log("-----------  date----------->", date);
