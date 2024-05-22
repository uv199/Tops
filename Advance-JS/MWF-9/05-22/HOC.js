// HOC- higher order componenet

// a function which take one function as parameters and return a function

// function fun1(fun) {
//   return fun;
// }

// function sayMorning(name) {
//   console.log(`hello ${name}, goodMorning, how are you ?`);
// }
// function sayAffterNoon(name) {
//   console.log(`hello ${name}, good noon, how are you ?`);
// }

function goodMorning(params) {
  return "Good Morning";
}
function goodAfternoon(params) {
  return "Good Afternoon";
}

function greetGenerator(name, greet) {
  console.log(`hello ${name},${greet()}, how are you ?`);
}

greetGenerator("urvish", goodMorning);
greetGenerator("urvish", goodAfternoon);
