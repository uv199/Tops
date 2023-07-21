import React, { useState } from "react";
import "./project.css";

// export default function StateProject1() {
//   const [color, setColor] = useState("black");
//   function chnageColor() {
//     setColor("white");
//   }
//   return (
//     <div>
//       <div className="div1">
//         <h1 style={{ color: color }}>Box</h1>
//       </div>
//       <button onClick={() => chnageColor()}>Chnage color</button>
//     </div>
//   );
// }

//---------------------------------------------------------------------------------------------

export default function StateProject1() {
  const [color, setColor] = useState("black");
  const [isDefault, setIsDefault] = useState(true);
  function chnageColor() {
    let a = "white";
    let b = "black";
    setIsDefault(!isDefault);
    setColor(isDefault ? b : a);
  }
  return (
    <div>
      <div className="div1">
        <h1 style={{ color: color }}>Box</h1>
      </div>
      <button onClick={() => chnageColor()}>Chnage color</button>
    </div>
  );
}
