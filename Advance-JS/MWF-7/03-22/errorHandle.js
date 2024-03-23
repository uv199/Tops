try {
  let jsonString = '{"name":"urvish","age":23}';
  let data = { a: 20 };
  let normalData = JSON.parse(jsonString);
  console.log("-----------  normalData----------->", normalData);
} catch (error) {
  // console.log("-----------  error----------->", error);
  console.log("somthing went wrongs");
}

function ageChecker(age) {
  if (age > 18) {
    return "you are aligible";
  } else {
    throw new Error("you are noot allow to drink");
  }
}

try {
  let msg = ageChecker(19);
  console.log("-----------  msg----------->", msg);
} catch (error) {
  console.log("-----------  error----------->", error.message)
  console.log("please stop dring");
  // console.log();
}
