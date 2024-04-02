function HOF(name, greetFun) {
  let line = "Hello ," + name;
  return greetFun(line);
}

function goodMorning(line) {
  console.log(line, "good morning..!");
}

function goodAfternoon(line) {
  console.log(line, "good Afternoon..!");
}

let p1 = "het";
let p2 = "meet";
HOF(p1, goodAfternoon);
HOF(p2, goodAfternoon);
