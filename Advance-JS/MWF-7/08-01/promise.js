// promise => PROMISE IS AN OBJECT WHICH REPRESENT A COMPLETION (OR FAILURE) OF AN ASYNCRONUS PROGRAM, THERE IS 3 PROBABILITY RESOLVE, REJECT AND PENDING, IF PROMISE RESOLVE THEN IT WILL JUMP TO THEN BLOCK AND IF PROMISE REJECT THEN IT JUMPS TO CATCH BLOCK.

/*
let fethData = new Promise((resolve, reject) => {
  // fetch data
  let data = false;
  if (data) {
    resolve("Data get successfully");
  } else {
    reject("Get some error");
  }
});

fethData
  .then((res) => {
    console.log("-----then-----");
    console.log("-----------  res----------->", res);
    return 500;
  })
  .then((res2) => {
    console.log("-----then-2-----");
    console.log("-----------  res-2----------->", res2);
  })
  .catch((error) => {
    console.log("-----------  error----------->", error);
    console.log("-----catch-----");
  })
  .finally(() => {
    console.log("-----finally-----");
  });


  */
let fethData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data get successfully");
  }, 5000);
});

let response = fethData;
console.log("-----------  response----------->", response)

// if(!data){ if data have falsy then if block call} // false, 0, null, undefined, ""
// if(data){if data do not have falsy then if block call} // !false, !0 , !null , !undefined, ""

/*

let fethData = new Promise((resolve, reject) => {
  if (data) {
    let obj = {
      message: "Data get successfully",
      no: 100,
    };
    resolve(obj);
 
});

fethData
  .then(({message,no}, x) => {
    console.log("-----------  x----------->", x);
    console.log("-----then-----");
    console.log("-----------  res----------->", res);
  })
  .catch(() => {
    console.log("-----catch-----");
  });



*/
