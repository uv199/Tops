let today = new Date();
console.log("-----------  today----------->", today);

console.log("-----------  today----------->", today.getDate());
console.log("-----------  today----------->", today.getFullYear());
console.log("-----------  today----------->", today.getMinutes());
console.log("-----------  today----------->", today.getHours());
console.log("-----------  today----------->", today.getDay());
console.log("-----------  today----------->", today.getMonth());

let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();
// array
console.log(`${dd}/${mm + 1}/${yyyy}`);
