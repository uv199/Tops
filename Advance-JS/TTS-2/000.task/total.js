var arr = [1, 2, 3, 4, 5, 7, 9];

let total = 0;

for (let i = 0; i < arr.length; i++) {
  total = total + arr[i];
  console.log(i);
}
console.log(total);
let name = "urvish"; //=> name[0] => "u_r_v_i_s_h"
let newStr = ""; // u_v_s_
// u_v_sh
// r_vi
// ravis =>r_v_s
for (let i = 0; i < name.length; i++) {
  console.log("-----------   name[i]----------->", name[i]);
}
