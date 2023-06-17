// let fun1 = () => {
//   setTimeout(() => {
//     return "okay";
//   }, 5000);
// };

let pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("okay");
  }, 5000);
});

let value = pro;
console.log(value);

// x() ,y()
//  want to execute x first and then after execute y
//  jo hame bad me call karvana he uss functin ko as a argument hame pass karna he dusre function me

// x(y())
// z()
// x(y(z()))

// ERROR HANDLING IN CB
// X(Y())
//X(cb)=>{
// process -> like data fetch
// let arr = [1,2,34]
// let isExist=    arr.include(1)
// if( isExist){
//   // return y(null,isExist)
// }else {
//   return ('data not found',null)
// }
// }

// y(err,res)=>{
//   if(err) { handle err}
//   else{
//

//   }
// }

// b->a->m
// b(a(m()))

// PROMISE

// A->B->C
// a -> promise()
// promise().then(b()).then(c()).catch((err)=> handle err)

// TRY-CATCH

// try{
//   let res = a()
//   let res2 = b(res)
// console.log(res)

// }.catch((err)=>{
// console.log(err); // data not found
// })

// async - await
//let main =async()=>{}
// async function main(){
// try{
//   let res = await a() => promise
//   let res2 = b(res)
// console.log(res)
// }.catch((err)=>{
// console.log(err); // data not found
// })
// }
