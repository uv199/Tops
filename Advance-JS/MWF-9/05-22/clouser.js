function clouserFun(name) {
  let userName = name;
  return (greet) => {
    console.log(`hello ${userName},${greet}, how are you ?`);
  };
}

let greetGenerator = clouserFun("Urvish");

/*
let greetGenerator = (greet) => {
    console.log(`hello ${"Urvish"},${greet}, how are you ?`);
  };
*/

let greetGenerator2 = clouserFun("Jatin");

greetGenerator("goodMorning");
greetGenerator("good afternoon");
greetGenerator2("goodMorning");
greetGenerator2("test");
