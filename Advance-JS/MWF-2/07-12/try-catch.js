function jsonToNoraml(jsonString) {
  try {
    let normalData = JSON.parse(jsonString);
    return normalData;
  } catch (error) {
    console.log("--->");
    return "somthing went wrong";
  }
}
let str = '{"name":"Urvish"}';
let obj = { name: "" };
let data = jsonToNoraml(obj);
console.log("-----------  data----------->", data);
