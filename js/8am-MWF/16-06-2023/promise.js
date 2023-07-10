// let pro = new Promise(callback)

// let callback = ()=>{
// }
let pro = new Promise((resolve, reject) => {
  let arr = [1, 2, 3];
  let isExist = arr.includes(1);
  // == value 1=='1' true  only comapare  value not data type
  // ===  data type  1==='1' false  compare both value + data type
  // if(isExist!==true){

  console.log("isExist :", isExist);
  if (isExist) {
    resolve("ha bhai mali gayu...!");
  } else {
    reject("nathi malyu...!");
  }
});

pro
  .then((res) => {
    // console.log("okay");
    return res;
  })
  .then((res1) => {
    console.log(res1 + "okay");
  })

  .catch((err) => {
    console.log("not - okay");
  });
