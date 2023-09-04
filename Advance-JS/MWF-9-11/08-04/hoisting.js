normalFun();

function normalFun(params) {
  console.log("----normalFun----");
}

normalFun();

fatFun();

let fatFun = () => {
  console.log("=====fatFun======");
};

fatFun();
