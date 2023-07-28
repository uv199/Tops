// var
// let
// const

// let=============================
{
  //   console.log("letA :", letA); // give err - Cannot access before initialization
  let letA;
  letA = 20;
  {
    // let letA = 10;
    console.log("letA :", letA);
  }
}

// console.log("letA :", letA);// give err -is not defined

//var=============================
{
  console.log("a :", a);
  var a;
  a = 10;
  a = 20;
  var a = "test";
  {
    var b = 50;
  }
  console.log("a :", a);
  console.log("b :", b);
}

//const=============================
{
  //   console.log("m :", m); // give err - Cannot access before initialization
  const m = "";
  //   m = "test"; // give err -  Assignment to constant variable.
  //   const m ; // give err - need to give value
  {
    console.log("m :", m);
  }
}
// console.log("m :", m); // give err

// {
//   {
//     var abc = 100;
//   }

//   var abc = 120;
//   console.log(abc);
// }
