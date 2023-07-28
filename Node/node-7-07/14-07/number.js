// isInteger()	It determines whether the given value is an integer.

console.log("isInteger()", Number.isInteger(12.6));
console.log(
  "isInteger()",
  typeof Number.parseInt("345"),
  Number.parseInt("345")
);

// toFixed()	It returns the string that represents a number with exact digits after a decimal point.
let x = 12.5237425378;
console.log("toFixed()", typeof x.toFixed(3), x.toFixed(3));

console.log("toString()", typeof x.toString(), x.toString());
