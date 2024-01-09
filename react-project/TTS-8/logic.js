// import axios from "axios";

// axios({
//   method: "post",
//   url: "http://localhost:9999/user/signin",
//   data: {
//     email: "gy@gmail.com",
//     password: "123456",
//   },
// })
//   .then((res) => {
//     console.log("-----------  res----------->", res.data);
//   })
//   .catch((err) => {
//     console.log("-----------  err----------->", err.response);
//   });
// // axios
//   .post("http://localhost:9999/user/signin", {
//     email: "gr@gmail.com",
//     password: "123456",
//   })
//   .then((res) => {
//     console.log("-----------  res ----------->", res.data);
//   })
//   .catch((err) => {
//     console.log("-----------  err ----------->", err.response.data.error);
//   });

let search = "dasasd";

let obj = { ...(search && { search: search }) };
console.log("-----------  obj----------->", obj);

let x = 123;

obj = { ...(search && { search: search }) };
console.log("-----------  obj----------->", obj);
// x && fun() && console.log("test-2");

function fun(params) {
  console.log("test");
  return true;
}
