function convertInToJSON(data) {
  return JSON.stringify(data);
}

function convertJSONInToNormal(data) {
  try {
    console.log("data----------->", data);
    return JSON.parse(data);
  } catch (error) {
    // console.log("-----------  error----------->", error);
    return "somthing is wrong ";
  }
}

function generateError() {
  throw new Error("proccess need to be stop");
}

try {
  const obj = undefined;

  const jsonData = convertInToJSON(obj);
  console.log("  jsonData----------->", jsonData);
  generateError();
  const normalData = convertJSONInToNormal(jsonData);
  console.log("normalData----------->", normalData);
} catch (error) {
  console.log("error --->", error.message);
}
