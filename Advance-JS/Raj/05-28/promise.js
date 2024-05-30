// promise is an object which show exicution status of the asyncronus operation. it is a three probability of promise 1. promish will resolve 2. promise will reject and 3.promise take tme to give response.
// we will hnadle promise by then catch , if promise will resolve then it will jump into then block and if promise reject or any arror genereated in promise then it is jump into catch block where we can handle error
// api call
//  you can use multiple then and you can get value i then which is return from upper then.

let fetchData = new Promise((resolve, reject) => {
  // data find
  let data = "test";
  if (data) {
    // throw new Error("User define custom error");
    resolve("Data found successfully");
  } else {
    reject("Data not fouond");
  }
});

fetchData
  .then((response) => {
    console.log("🚀 ~ fetchData.then ~ response:", response);
    return "hello world"; // you gets this return value in below then
  })
  .then((response2) => {
    console.log("🚀 ~ .then ~ response2:", response2);
  })
  .catch((error) => {
    console.log("🚀 ~ fetchData.catch ~ error:", error);
  })
  .finally(() => {
    console.log("🚀 ~ fetchData.finally ~ response:");
  });

let fetchDataTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data found successfully");
  }, 1000);
});

let response = fetchDataTwo;
console.log("🚀 ~ response:", response);

//  promisification
//  try catch
//  async await
//  optional chaining
