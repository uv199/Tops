/*
function print(name) {
  let defaultName = name || "user";
  console.log("my name is " + defaultName);
}
*/
function print(name = "user") {
  console.log("my name is " + name);
}

print("urvish");
print();
