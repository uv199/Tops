import React, { useState } from "react";

export default function StateProject1() {
  let [color, setColour] = useState("red");
  let [defaultColor, setDefaultColor] = useState(true);

  function chnageColour() {
    let c1 = "red";
    let c2 = "green";
    console.log("defaultColor:", defaultColor);
    setColour(defaultColor ? c1 : c2);
    setDefaultColor(!defaultColor);
  }
  return (
    <div>
      <h1 style={{ color: color }}>Urvish</h1>
      <button onClick={() => chnageColour()}>Chnage color</button>
    </div>
  );
}

// --------------------------------------------------------------------------------

// export default function StateProject1() {
//   let [color, setColour] = useState("red");

//   function chnageColour() {
//     setColour("green");
//   }
//   return (
//     <div>
//       <h1 style={{ color: color }}>Urvish</h1>
//       <button onClick={() => chnageColour()}>Chnage color</button>
//     </div>
//   );
// }


