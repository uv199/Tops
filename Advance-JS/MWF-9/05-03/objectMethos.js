let obj = {
  str: "string",
  no: 12,
  null: null,
  undefined: undefined,
  bool: true,
};


let keyArr = Object.keys(obj)
console.log("-----------  keyArr----------->", keyArr)

let valueArr = Object.values(obj)
console.log("-----------  valueArr----------->", valueArr)

let entreis = Object.entries(obj)
console.log("-----------  entreis----------->", entreis)
