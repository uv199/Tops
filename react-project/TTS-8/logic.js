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

// let search = "dasasd";

// let obj = { ...(search && { search: search }) };
// console.log("-----------  obj----------->", obj);

// let x = 123;

// obj = { ...(search && { search: search }) };
// console.log("-----------  obj----------->", obj);
// // x && fun() && console.log("test-2");

// function fun(params) {
//   console.log("test");
//   return true;
// }

// // category.map((e)=>{value:e,lable:e.split(0,2).toupperCase() + e.split(1,e.length+1)})
// // category.map((e)=>{value:e,lable:e})

// let xxxxx = ["urvish", "meet", "kashyap"].map((e) => ({
//   value: e,
//   lable: e.charAt(0).toUpperCase() + e.slice(1, e.length),
// }));

// console.log("-----------  xxxxx----------->", xxxxx);

// const fun = () => {
//   return {avl:true};
// };

const fun = () => ({ avl: true });
// const fun = () => return true;
// const fun = () => {return true}
let returnVal = fun();
console.log("-----------  returnVal----------->", returnVal);
