/*
// ---------------var-----------------
var a; // intial value
a = 100; // reassign
var a = 800; // redeclier
var a2 = 900;

{
  {
    {
      var a3 = 900;
    }
    var a3 = 100000
  }
}

//  ---------------let-----------------
let b; // intial value not needed
// let b  // can't redeclier
b = 9000; // can reassign

{
    let b2 = 100;
    {
        // console.log("b2", b2); // Cannot access 'b2' before initialization
        let b3 = 200;
        let b2 = 10000;
    // b2 = 10000;
    console.log("b2", b2);
  }
  //   console.log("b3", b3); //  b3 is not defined
}
// console.log("b2", b2) //  b2 is not defined

*/
{
  // tops
  let mon = 100;
  {
    console.log("a--->", mon); // complain 1
    //    let mon = "class a 100";
    mon = "class a 100";
    console.log("a--->", mon); // complain 2
  }
  {
    console.log("b--->", mon);
  }
  {
    console.log("c--->", mon);
  }
}




