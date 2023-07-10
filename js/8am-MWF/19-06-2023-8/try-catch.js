// let pro = new Promise((resolve, reject) => {
//   let arr = [1];
//   let isExist = arr.includes(1);
//   console.log("isExist :", isExist);
//   if (isExist) resolve(arr);
//   else reject("nathi malyu...!");
// });

let fun0 = () => {
  return [1];
};
let f = 20;
// let fun1 = (a) => {

//   setTimeout(() => {
//     throw new Error("throw new err");
//   }, 1000);
// };
//

// function name(params) {
// }
// onj ={
//   a:10,
//   b:10,
// }
fun1(obj);
let fun1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("throw new err");
  }, 1000);
});
let fun2 = (val) => {
  let newArr = [...val, 2];
  return newArr;
};

let fun3 = (val) => {
  // console.log("val :", val);
  val.unshift(0);
  // console.log("val :", val);
  return val;
};

async function tryCatch() {
  // let tryCatch=async()=> {
  try {
    let x = fun0();
    console.log("x :", x);
    // x=[1]
    await fun1; //-->stop execution -> move to catch
    let x2 = fun2(x);
    console.log(" x2 :", x2);
    //x2=[1,2]
    let x3 = fun3(x2);
    console.log("x3 :", x3);
  } catch (err) {
    console.log("err :", err);
  }
}

tryCatch();
// ASYNC - WAIT
// function print(p) {
//   console.log(p);
// }

// let a = "abc";
// print(a);

/**
 *find(filter,(err,res)=>{
    
 })
 *find(filter).then().catch()
 * / */

 