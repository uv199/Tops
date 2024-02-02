let a = undefined; //null/0/""/false/undfined
let b = 100;

// let c = a || b; // => null/0/""/false/undfined  => falsy
let c = a ?? b;  // => null/undfined => khali
console.log("-----------  c----------->", c);
