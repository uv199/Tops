/*
const user = {
  name: "urvish",
  haveLogin: true,
  address: {
    pincode: 395005,
  },
  hobby: ["reading"],
};

let jsonData = JSON.stringify(user);
console.log("🚀 ~ jsonData:", typeof jsonData);

let normalData = JSON.parse(
  '{"name":"urvish","haveLogin":true,"address":{"pincode":395005},"hobby":["reading"]}'
);
console.log("🚀 ~ normalData:", normalData)

*/
let data = { a: 20 };
// let json = JSON.stringify(data);
// console.log("🚀 ~ json:", json);

// // if (json !== "{}") {
// if (JSON.stringify(data) !== "{}") {
//   console.log("i have some data");
// } else {
//   console.log("i do not have data");
// }

let keys = Object.keys(data);
console.log("🚀 ~ keys:", keys);
if (keys.length > 0) {
  console.log("i have some data");
} else {
  console.log("i do not have data");
}
