import React, { useState } from "react";

export default function MapKey() {
  let [color, setColor] = useState(["red", "yellow", "blue"]);
  return (
    <div>
      <ul>
        {color.map((e) => {
          return <li>color is {}</li>;
        })}
      </ul>
    </div>
  );
}
