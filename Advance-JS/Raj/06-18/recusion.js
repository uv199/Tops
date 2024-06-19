function fun(x) {
  console.log("----->", x);
  if (x > 0) {
    fun(x - 1);
  }
}

fun(10);


// TODO need to do 2 task one recursion and reducer
//  [1,2,3,4,5,6,7,8,9]
//  [1,2,3,4,5,6,7,8]
//  [1,2,3,4,5,6,7]
//  [1,2,3,4,5,6]
//  [1,2,3,4,5]
//  [1,2,3,4]
//  [1,2,3]
//  [1,2]
//  [1]
