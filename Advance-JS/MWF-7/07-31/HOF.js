// A function which take another function as parameter or return function it call HOF

function HOF(fun) {
  return () => {};
}

HOF(() => {});
