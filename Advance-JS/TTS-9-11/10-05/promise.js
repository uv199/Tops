/* 
const p1 = new Promise((resolve, rejeact) => {
  //   console.log("rejeact", rejeact);
  //   console.log("resolve", resolve);
  const arr = [1, 2, 3, 4, 5];
  let isExist = arr.includes(5);
  //   throw new Error("----manulaly generated Errro---");
  if (isExist) {
    resolve(" 5 is Availabel"); // {name:"Urvish"}
  } else {
    rejeact("5 is not in array");
  }
  console.log("isExist", isExist);
});

p1.then((res) => {
  console.log("-----res-1------>", res); // add key city
  return "----test----"; // res.teacherId
})
  .then((res2) => {
    // call api
    // add age key
    JSON.parse({});
    console.log("-----res-2------>", res2); 
    return { data: "nothing" };
  })
  .then((res3) => {
    console.log("-----res-3------>", res3);
    // print all 3 key
  })
  .catch((err) => {
    console.log("err----->", err.message);
  });
*/
const p2 = new Promise((resolve, rejeact) => {
  setTimeout(() => {
    resolve("----resolve--->");
  }, 5000);
});

console.log(p2);
