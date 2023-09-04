let obj = {
  name: "urvish",
  vehicalDetails: "",
};
console.log(obj.name);

// let city = obj.add.city;
// let city = obj ? (obj.add ? obj.add.city : undefined) : undefined;
let city = obj?.add?.city;

console.log(city);

obj?.vehicalDetails?.map?.((e) => {
  console.log("e-->", e);
});
