function loop(x) {
  console.log("---->", x);
  if (x > 0) {
    loop(x - 1);
  }
}

loop(10); // start
/*

6->1->2->3 call -> 1->2->3 call ->1.... 

*/
