/*
try {
  console.log("-----");
  console.log("-----");
  JSON.parse({ a: 20 });
  console.log("-----");
} catch (err) {
  console.log("somthing went wrong");
}
// JSON.parse({ a: 20 });
*/

function dataConverter(jsonData) {
  try {
    let normalData = JSON.parse(jsonData);
    throw new Error("ku6 to gadbad he daya");
    return normalData;
  } catch (error) {
    return "somthing is wrong";
  }
}

let data = dataConverter('{"age":23}');
// let data = dataConverter({ age: 23 });
console.log("-----------  data----------->", data);
