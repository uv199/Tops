//  promise = promise is an object who show execution status of asyncronus operation , there are three probability of promise 1st. resolve , 2nd. reject and 3rd pending if promise resolve then we can handle it by then block and if reject then we can handle it by catch block. 

let fetchData = new Promise((resolve, reject) => {
  //  find data from databse
  let data = 10;
  if (data) {
    // JSON.parse({});
    resolve("Data fetch successfully..");
  } else {
    reject("Get some error..");
  }
});

fetchData
  .then((res) => {
    console.log("-----------  res----------->", res);
    console.log("-----then--1------>");
  })
  .then((res2) => {
    JSON.parse({});
    console.log("-----then--2------>");
  })
  .then(() => {
    console.log("-----then--3------>");
  })
  .catch((err) => {
    console.log("-----------  err----------->", err.message);
    console.log("-------catch------->");
  })
  .finally(() => {
    console.log("-----------  finally----------->");
    // rediret
  });

/*
let x = 0;
if (x) {
  //  if x have value !== 0,false,undefined,null,""
}
*/
