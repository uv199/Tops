/*
intial value
reassign
redeclear
hoiting
scope

*/

/*
1. var 
  - not need to give intial value
  - support hoisting
  - we can chnage value (reassign)
  - we can use same name to multiple variable (redeclear)
  - global scope

  var x;
  x = 300;
  var x = 8000;
  console.log("🚀 ~ x:", x);
  
  {
      var y = 199;
  }
    console.log("🚀 ~ y:", y);
    
*/

/*
2. let 
  - not need to give intial value
  - not support hoisting
  - we can chnage value (reassign)
  - we can not use same name to multiple variable (can't redeclear)
  - block scope

  
  let x;
  x = 300;
  // let x  // give error
  x = 500;
  console.log("🚀 ~ x:", x);
  
  
  {
      let y = 199;
      {
          let y = 8000;
          console.log("🚀 ~ y:", y);
          let z = 300;
          console.log("🚀 ~ z:", z);
       }
  }
    
 */

/*
  3. const 
  - compulsory need to give intial value
  - not support hoisting
  - we can not chnage value (can't reassign)
  - we can not use same name to multiple variable (can't redeclear)
  - block scope

  
  */

// const x  // give error

const x = 300;
x = 400; // give error
// const x  // give error

// scope  -> same as let
{
  const y = 199;
  {
    const y = 8000;
    console.log("🚀 ~ y:", y);
    const z = 300;
    console.log("🚀 ~ z:", z);
  }
}
