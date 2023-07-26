function print2(params) {
  console.log(" print2 ~ print2:----->");
}

function print3(params) {
  console.log(" print3 ~ print3:----->");
}

module.exports = {
  // print2: print2, // key and value(variable name /function name) and they are same so we can define only key test
  print2,
  print3,
};
