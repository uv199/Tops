function convertJsonToData(JsonData) {
  try {
    console.log("---------------------->");
    let normalData = JSON.parse(JsonData);
    return normalData;
  } catch (err) {
    console.log("err--->", err.message);
    return err.message;
  }
}

// let data = convertJsonToData('{ "name": "uv" }');
// let data = convertJsonToData({ name: "uv" });
// console.log("data", data);
// console.log("test------->");

function findEvenNumber(arr) {
  let evenNo = arr.find((e) => e % 2 == 0);
  console.log("evenNo", evenNo);
  if (!evenNo) {
    throw new Error(" please provide proper no");
  }
  return evenNo;
}

try {
  let x = findEvenNumber([1, 3, 5, 7, 9]);
  console.log("x", x);
} catch (error) {
  console.log("error----------->", error.message);
}
