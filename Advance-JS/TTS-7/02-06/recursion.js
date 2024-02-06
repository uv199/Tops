function loop(x) {
  console.log("------->", x);
  if (x > 0) {
    loop(x - 1);
  }
}

loop(10);


