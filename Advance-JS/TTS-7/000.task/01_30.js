let today = new Date();
let ms = today.getTime();
console.log("-----------  ms----------->", ms);
let m = 1000 * 60 * 60 * 24 * 2;
let d = new Date(m);

/*
 0 ms - 1/1/1970

1000*60*60*24*2
 1706580011775 ms - 30/1/2024
 1706752811775 ms - 1/2/2024
 
 */

getCustomDate(6);
