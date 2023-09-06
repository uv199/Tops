let obj = { x: 20 };

console.log(obj.x);
console.log(obj.y);
// console.log(obj.y.z)

// const x = obj ? (obj.y ? obj.y.z : undefined) : undefined;
// const x = obj.y.z // error - can not read property of undefiend
// const x = obj?.y?.z
const x = obj?.y?.();

console.log(x);
