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
  // url: "https://jsonplaceholder.typicode.com/posts",
  url: "http://localhost:3000/user/sanket",
  data: {
    Text: "Ich würde wirklich gern Ihr Auto um den Block fahren ein paar Mal.",
  },
})
  .then((res) => {
    console.log("----res----", res.data);
  })
  .catch((err) => {
    console.log("----err----", err.message);
  });
