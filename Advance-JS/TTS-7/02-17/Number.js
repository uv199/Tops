let x = "123";

let no = Number.parseInt(x);
console.log("-----------  no----------->", typeof no);
console.log("-----------  x----------->", +x);

console.log(Number.parseFloat("123.12"));
console.log("-----------  123.12----------->", +"123.12");

let y = 12.346;
let z = 14;

console.log("-----------  y----------->", y.toFixed(2));
console.log("-----------  y----------->", z.toFixed(5));
