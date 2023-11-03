function print(x = 0, y) {
  console.log("print", x + y);
}

print(null, 50);

const print2 = function (params) {
  console.log("print2");
};

print2();

const fatArrFun = (para) => {
  console.log("fatArrFun", fatArrFun);
};
fatArrFun();




// --------------------------------
