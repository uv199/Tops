// HOF (higher order function) -> a function which take another functuion in paramaters or return a function

function HOF(sum) {
  return () => {
    console.log("---inner fun---->");
  };
}

function sum(a, b) {
  return a + b;
}

HOF(sum);
