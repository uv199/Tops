// function call it self , + function ni andar te j function ne call karavanu

function print(x) {
  console.log("---->", x);
  if (x > 0) {
    print(x - 1);
  }
}

print(10);


// [12,25,35,48,50,67,79]=> print a array element 12 -> end of arr(79)
