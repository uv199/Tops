import React, { useState } from "react";

export default function HOC(Component) {
  return () => {
    console.log("Component", Component);
    let [count, setCount] = useState(0);
    return (
      <>
        <Component setCount={setCount} count={count} />
      </>
    );
  };
}
