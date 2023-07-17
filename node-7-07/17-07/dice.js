function generateNumber(params) {}
// let x = 0;

// do {
//   console.log("----->", a);
//   a = generateNumber();
// } while (0 < a && a < 7);

function generateDiceNumber() {
  let a = null;
  let x = 0;
  while (x === 0) {
    // a = +Math.random().toFixed(1).split(".")[1];
    a = Number.parseFloat(Math.random().toFixed(1)) * 10;
    if (0 < a && a < 7) {
      return a;
    }
  }
}

console.log(" generateDiceNumber():", generateDiceNumber());
// console.log("----", "10" * 10);
