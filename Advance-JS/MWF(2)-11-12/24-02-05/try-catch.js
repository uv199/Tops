/*

try {
  let data = convertData();
  console.log("-----------  data----------->", data);
  JSON.parse({ name: "uv" });
  let data2 = convertData();
  console.log("-----------  data2----------->", data2);
} catch (error) {
  console.log("somthing is wrong", error.message);
}

function convertData(params) {
  console.log("--->");
  return JSON.parse('{ "name": "uv" }');
}



//

function convertData(jsonData) {
    try {
        return JSON.parse(jsonData);
    } catch (error) {
        // return "ku6 to gadbad he";
        return error.message;
    }
}

// let data = convertData(`{"name":"uv"}`);
let data = convertData({ name: "uv" });

console.log("-----------  data----------->", data);
*/

function checkAge(no) {
  if (no > 18) {
    return true;
  } else {
    throw new Error("somthing is wrong");
  }
}
function allowDrink() {
  console.log("you are alligible to drink");
}

try {
  checkAge(20);
  allowDrink();
  let x = 20;
  if (x < 10) {
    throw new Error("just test");
  }
  console.log("-----test-----");
} catch (error) {
  console.log("-----------  error----------->", error.message);
}
