let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("hello wolrd...!");
  }, 1000);
});

// async function print(params) {
const print = async () => {
  try {
    let msg = await pr;
    console.log("-----------  msg----------->", msg);
    console.log("urvish");
  } catch (err) {
    console.log("-----------  err----------->", err);
  }
};

print();

// try {
//   JSON.parse({ a: 20 });
// } catch (error) {
//   console.log("-----------  error----------->", error);
// }

try {
  let str = '{ "name": "urvish" }';
  let nData = { name: "urvish" }
  let normalData = JSON.parse(nData);
  console.log("my name is ", normalData.name);
} catch (error) {
  console.log("somthing went wrong");
}
