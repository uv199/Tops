//  try...catch() - In JavaScript, we have a try...catch block to handle errors. We define our code in the try block. If any errors occur during the execution of the try block, it jumps to the catch block. The generated error message is available in the parameter of the catch block.

/*
try {
  console.log("---line one---->");
  // throw new Error("Something went wrong");
  JSON.parse({ a: 20 });
  console.log("---line two---->");
} catch (error) {
  console.log("catch------>", error.message);
}
*/

function jsonDecoder(jsonData) {
  try {
    const normalData = JSON.parse(jsonData);
    return normalData;
  } catch (error) {
    return error.message || "Smothing went wrong";
  }
}

let data = jsonDecoder({});
console.log("🚀 ~ data:", data);
