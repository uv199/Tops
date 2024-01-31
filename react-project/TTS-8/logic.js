const HOC = (greet) => {
  let gt = greet;
  return (name) => {
    return gt + " " + name;
  };
};

// let gm = HOC("good Morning");
// let ga = HOC("good afternoon");
// console.log(gm("person-1"));
// console.log(ga("person-2"));

function goodMorning(person) {
  console.log("good morning ", person);
}

function goodAfternoon(person) {
  console.log("good afternoon ", person);
}
goodMorning("rutvik");
goodMorning("test-2");
goodAfternoon("test-2");

function combineLogic(geet) {
  return function print(person) {
    console.log(geet, person);
  };
}

let useFormorning = combineLogic("Good Morning");
let useForEvening = combineLogic("Evening");
useForEvening("rutvik ");
useFormorning("rutvik");
useFormorning("harsh");
