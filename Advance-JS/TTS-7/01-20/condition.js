let x = 0; // null/undefined/false/0  =>falsy value

if (x) {
  // if call when x not contain null/undefined/false/0
  console.log("-=-=-=x-=-=->");
} else {
}

if (!x) {
  // if call when x contain null/undefined/false/0
  console.log("-=-=-=!x-=-=->");
}
