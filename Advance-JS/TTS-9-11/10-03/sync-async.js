function fun1(params) {
  //   for (let i = 0; i < 1000000000; i++) {}
  setTimeout(() => {
    console.log("----->fun1");
  }, [2000]);
}

function fun2(params) {
  console.log("----->fun2");
}

fun1();
fun2();
