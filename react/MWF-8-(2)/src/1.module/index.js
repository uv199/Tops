import Test, { singleExport as customName } from "./mainFun.js";
import { fun1, fun2 } from "./fun1.js";

const singleExport = "hello world";

console.log("-----------  customName----------->", customName());
console.log("-----------  singleExport----------->", singleExport);
console.log("-----------  Test----------->", Test);
console.log("-----------  fun1, fun2 ----------->", fun1, fun2);
