let user = {
  name: "urvish",
  // age: 23,
  // address: {
  //   city: "surat",
  //   pinCode: 395007,
  // },
};

console.log("---name--->", user?.name);
console.log("---age--->", user?.age);
console.log("---pincode--->", user?.address?.pinCode);

user ? (user.address ? user.address.pincode : undefined) : undefined;

let arr = null;

console.log("---arr-length----", arr ? arr.length : undefined);


user?.["age"]
user?.print1?.()


arr?.map?.((e)=>{

})


