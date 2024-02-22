/*

let age = 26;

if (age > 18) {
  console.log("you are allow to drink");
  if (age < 25) {
    console.log("you are only allow to drink soft drinks");
  } else {
    console.log("you are allow to drink alchol");
  }
} else {
  console.log("you are not allow to drink");
}
*/

// if less then 33 then print Student failed
// if grtter then or equel to 33  but less then 50 then print Student is below average
// if grtter then or equel to 50  but less then 70 then print Student is average
// if grtter then or equel to 70  but less then 90 then print Student is above average
// if grtter then or equel to 90 brillient student

let marks = 71;

if (marks <= 33) {
  console.log("student is failed");
} else if (marks <= 50) {
  console.log("Student is below average");
} else if(marks <= 70){
  console.log("student is average");
}else if(marks <= 90) {
  console.log("student is above average");
}else{
  console.log("student is brillient");
}
