function fun(x) {
  console.log("----->", x);
  if (x > 0) {
    fun(x - 1);
  } else {
    console.log("loop finish");
  }
}

fun(5);
