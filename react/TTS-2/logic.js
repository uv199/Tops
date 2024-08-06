for (let i = 0; i < 10; i++) {}
for (let j = 0; j > 10; j += 2) {}

/*

HOF => ek functin je argument ma function ley otherwise return function kare te function ne HOF kevay
*/

function HOF(fun) {
  return () => {
    console.log("-->");
  };
}

function print(params) {}
HOF(print);

// clouser => ek functin j return function kare and inner function parent function na variable access kare tene cluser kevay

function clouser(params) {
  let x = 20;
  return () => {
    console.log(x);
  };
}

// currying => ek function in andar biiju functin return and ani andar titju function return karelu hoy ene curring kevay

function fun(params) {
  return () => {
    return () => {
      return () => {};
    };
  };
}

// fun()()()();
