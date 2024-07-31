// a functin which pass as an argument in another function

function fun(cb) {
  console.log("-----------  cb----------->", cb)
}

function fun2(params) {} // callback

fun(fun2());
fun(fun2);
fun(()=>{})


// find
