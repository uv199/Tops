function fun(x) {
  console.log("------>", x);
  if (x > 0) {
    fun(x - 1);
  }
}

fun(10);

function print(arr) {
  console.log("arr", arr.join("-"));
  arr.pop();
  if (arr?.length > 0) {
    print(arr);
  }
}

print([1, 2, 3, 4, 5, 6]);
