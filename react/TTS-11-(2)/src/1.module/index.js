import { sum, sub, x, multi as MULTI } from "./fun1.js";
import NotPrint, { name } from "./fun2.js";
console.log("-----------  name----------->", name);

// export default
NotPrint();

// export
sum(29, 9);
sub(29, 9);
// multi(20, 9);
MULTI(20, 9);
