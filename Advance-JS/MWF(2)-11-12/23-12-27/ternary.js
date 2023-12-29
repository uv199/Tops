let age = 18;

// if (age > 18) {
//   console.log("you are eligible");
// } else {
//   console.log("you are restricted");
// }

age > 18 ? console.log("you are eligible") : console.log("you are restricted");

// let allowDrink = false;
// if (age > 18) {
//   allowDrink = true;

// }

let allowDrink = age > 18 ? true : false;
console.log("-----------  allowDrink----------->", allowDrink);

let flag = true
flag && console.log("-----flag true---->")

/*
9 you are not elige
 you are below 10
12 you are not elige
 you are between 10 to 18
 */
