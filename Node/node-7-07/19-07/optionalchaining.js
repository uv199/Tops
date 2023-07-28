let data = {
  x: 20,
  //   y: {
  //     z: 20,
  //   },
};

console.log(data.x);

// console.log(data.y.z);
console.log(data?.y?.z?.m?.n);
console.log(data ? (data.y ? data.y.z : undefined) : undefined);
data?.map?.((e) => {});

data?.reverce?.();

// x?.y?.m = "test"
