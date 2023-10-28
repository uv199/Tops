function fun(x, y = 0) {
  console.log("x, y", x, y);
  console.log("---->", x + y);
  return x + y;
}

let total = fun(10, 90);
console.log("total", total);

const fatArrowFun = () => {
  console.log("--fatArrowFun-->");
};

fatArrowFun();
