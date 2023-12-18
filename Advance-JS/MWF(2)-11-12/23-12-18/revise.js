let age = 20;
let gender = "male";
let ball = "";
if (age > 18) {
  if (gender === "male") {
    ball = "red";
  } else if (gender === "female") {
    ball = "pink";
  }
} else {
  ball = "green";
}

console.log("BALL", ball);
