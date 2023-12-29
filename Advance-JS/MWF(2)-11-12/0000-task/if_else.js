let obtainMarks = 24;

console.log("=======", 33 < obtainMarks <= 50);

if (obtainMarks > 33) {
  console.log("you are pass");
  if (33 < obtainMarks && obtainMarks <= 50) {
    console.log("-----below average---->");
  } else if (50 < obtainMarks && obtainMarks <= 70) {
    console.log("-----average---->");
  } else if (70 < obtainMarks && obtainMarks <= 90) {
    console.log("-----above average---->");
  } else if (obtainMarks > 90) {
    console.log("----- brillient ---->");
  }
} else {
  console.log("you are fail");
}

/*
if pass
    if 50 above 
    if  50 above 
else fail

*/

let age = 12;

age >= 18
  ? console.log("you are aligible")
  : age > 10
  ? console.log("you are between 10 to 18")
  : console.log("you are below 10");

//  ( age>18 ? ("print 18" ):( age>10 ? ("above 10 below 18" ): ("below 10")))

let color = "green";
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "green":
    console.log("color is green");
    break;
  case "yellow":
    console.log("color is yellow");
    break;
  case "green":
    console.log("color is green");
    break;

  default:
    console.log("-------->");
    break;
}
