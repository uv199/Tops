/*
function count(x) {
  console.log("----->", x);
  if (x > 0) {
    count(x - 1);
  } else {
    console.log("loop end");
  }
}
count(10);
*/

function count(x) {
  console.log("----->", x);
  if (x.length > 0) {
    x.pop();
    count(x);
  } else {
    console.log("loop end....!");
  }
}
count([1, 2, 3, 4, 5]);
