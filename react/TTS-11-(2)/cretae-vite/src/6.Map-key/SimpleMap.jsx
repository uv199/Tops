import React, { useId } from "react";

let name = ["urvish", "jayom", "dwanil", "pravin"];

export default function SimpleMap() {
  return (
    <div>
      {name.map((e, i) => {
        let key = useId();
        console.log("-----------  key----------->", key);
        // return <h1 key={key}>{e}</h1>;
        return <h1 key={i}>{e}</h1>;
      })}
    </div>
  );
}
