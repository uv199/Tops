function sum(a, b, ...c) {
  console.log("c :", c); // give array of rest pera
  return a + b;
}

console.log(sum(1, 2, 1, 2, 1, 2));
