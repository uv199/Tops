let x = true;
let generatedno = null;
while (x) {
  let no = Math.floor(Math.random() * 10);
  if (no > 0 && no < 7) {
    generatedno = no;
    break;
  }
}

console.log("-----------  generatedno----------->", generatedno);
