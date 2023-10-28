import React, { useState } from "react";

export const HOC = (Component) => {
//   console.log("Component", Component);
  return function Hoc() {
    let [x, setX] = useState(0);
    return (
      <div>
        <Component x={x} setX={setX} />
      </div>
    );
  };
};
