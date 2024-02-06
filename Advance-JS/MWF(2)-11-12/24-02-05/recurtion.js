function fun(x) {
  if (x > 0) {
    console.log("-------->", x);
    fun(x - 1);
  }
}

fun(10);
