// let date = new Date(); //current date
let xDate = "2023-08-12";
let date = new Date(xDate); //customise date
// let date = new Date(`2023-08-14T05:11:06.192Z`);
console.log("~ date:", date);

console.log("getFullYear", date.getFullYear());
console.log("getHours", date.getHours());
console.log("getTime", date.getTime());
console.log("getDay", date.getDay());
console.log("getDate", date.getDate());
console.log("getMinutes", date.getMinutes());
console.log("getMonth", date.getMonth());

let dd = date.getDate();
let mm = date.getMonth() + 1;
let yyyy = date.getFullYear();
console.log("Date : ", `${dd}-${mm}-${yyyy}`);
