const axios = require("axios");
let url = "https://jsonplaceholder.typicode.com/";
let data = {};
// axios
//   .get(`${url}posts`,{})
//   .then((res) => {
//     console.log("----res----", res.data);
//   })
//   .catch((err) => {
//     console.log("----err----", err.message);
//   });

axios({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/posts",
  data: {},
})
  .then((res) => {
    console.log("----res----", res.data);
  })
  .catch((err) => {
    console.log("----err----", err.message);
  });
