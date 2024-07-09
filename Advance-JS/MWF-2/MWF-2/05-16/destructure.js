let user = {
  name: "urvish",
  age: 23,
  city: "surat",
  state: "gujarat",
};

// let name = user.name;
// let age = user.age;
// let city = user.city;

let { age, name, ...address } = user;

// console.log("-----------  address----------->", address);
// console.log("-----------  name----------->", name);
// console.log("-----------  age----------->", age);

function cred(params) {
  return { email: "test@gmail.com", password: "123456" };
}

/*
let returnData = cred();
console.log("-----------  returnData----------->", returnData)


console.log("email is ",returnData.email)
console.log("password is ",returnData.password)
*/

let { email, password } = cred();

// console.log("email is ", email);
// console.log("password is ", password);

let arr = [10, 20, 30, 40, 50];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// with destructure
let [a, c, ...b] = arr;

console.log("-----------  a----------->", a);
console.log("-----------  b----------->", b);
console.log("-----------  c----------->", c);
