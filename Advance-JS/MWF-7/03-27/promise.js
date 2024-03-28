/*
let findData = new Promise((resolve, reject) => {
  //find data from database  code
  if (true) {
    // throw new Error("somthing went wrong...!");
    resolve("i found a matching data");
  } else {
    reject({ message: "matching data not found...!" });
  }
});

findData
  .then((response) => {
    console.log("------response------->", response);
    //  time consuming process
    // return result which time consuming process return
    return "its return from 1st then ";
  })
  .then((response2) => {
    console.log("--------response2------->", response2);
  })
  .then((response3) => {
    console.log("--------response3------->", response3);
  })
  .catch((error) => {
    console.log("-----------  error----------->", error.message);
  });

*/
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done....!");
  }, 1000);
});

let returnData = p;
console.log("-----------  returnData----------->", returnData);
