1;
12;
123;
1234;
12345;

let x = 0;
for (let i = 0; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += `${x}`;
    x++;
  }
  console.log(str);
  str = "";
}
