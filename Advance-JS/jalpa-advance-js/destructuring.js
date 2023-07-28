let obj = {
  a: 10,
  b: 20,
};
let keys = Object.keys(obj);
let value = Object.values(obj);

// let x = obj.a;
// let y = obj.b;

// let x, y;

let { a, b } = obj; //===> let a = obj.a // let b = obj.b
// var { a, b,a } = obj; //===> var a = obj.a // var b = obj.b //
console.log("a,b :", a, b);

let arr = [10, 2, 3];

let [m, n, o] = arr;
console.log("m, n, o :", m, n, o);

// string ========================================================>
let s1 = "jalpa's m chinmay";
let s2 = 'jalpa"s m chinmay';
let s3 = `jalpa  ${m}  's"chinmay`;

// templete litrel ==${variables name}

console.log("s1 :", s1);
console.log("s2 :", s2);
console.log("s3 :", s3);

// date =======================================================>

let now = new Date(0);
console.log('now :', now.getFullYear());
