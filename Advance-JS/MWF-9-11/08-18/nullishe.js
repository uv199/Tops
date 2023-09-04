let x = 0;
// || ->  null/undefined/0/false
// ?? ->  null/undefined

// || returns the first truthy value.
// ?? returns the first defined value.

// let b = x || 100;
let b = x ?? 100;

10 / 2 === 6 ? console.log("yes") : console.log("no");
