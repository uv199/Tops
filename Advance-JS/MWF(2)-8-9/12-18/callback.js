function fun1(cb, cb3) {
  console.log("-----------  cb----------->", typeof cb);
  setTimeout(() => {
    console.log("-----fun1----->");
    cb(cb3);
  }, 1000);
}

function fun2(cb) {
  setTimeout(() => {
    console.log("-----fun2----->");
    cb();
  }, 1000);
}
function fun3() {
  console.log("-----fun3----->");
}

fun1(fun2, fun3);
// fun3();
// fun2();

/*
function fun1(cb) {
  console.log("-----------  cb----------->", typeof cb);
  setTimeout(() => {
    console.log("-----fun1----->");
    cb();
  }, 1000);
}

function fun2(params) {
  console.log("-----fun2----->");
}


fun1(()=>{
    console.log("-----fun2----->");
})

fun1(fun2);
// fun2();
*/

