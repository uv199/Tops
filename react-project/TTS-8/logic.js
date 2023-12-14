const handleCheck = (x) => {
  // if value available in array then remove from array
  // and if not available in array then add it

  let arr = [1, 2, 3, 10];
  if (arr.includes(x)) {
    arr = arr.filter((e) => e !== x);
  } else {
    arr = [...arr, x];
  }
};
handleCheck(3);
handleCheck(4);
