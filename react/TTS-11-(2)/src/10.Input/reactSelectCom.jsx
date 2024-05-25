import React, { useState } from "react";
import ReactSelect from "react-select";

const options = [
  { label: "RED", value: "red" },
  { label: "YELLOW", value: "yellow" },
  { label: "GREEN", value: "Green" },
  { label: "PURPULE", value: "Purpule" },
  { label: "BLACK", value: "black" },
];
export default function () {
  let [color, setColor] = useState("red");
  let [colorArr, setColorArr] = useState(["red","green"]);

  const singleSelectHandler = (e) => {
    console.log("----e----", e);
    setColor(e.value);
  };

  const multiSelectHandler = (e) => {
    console.log("----e----", e);
    let data = e.map((e) => e.value);
    setColorArr(data);
  };
  return (
    <div>
      <h1>color is {color}</h1>
      <ReactSelect
        className="w-[300px]"
        options={options}
        value={{ label: color, value: color }}
        onChange={(e) => singleSelectHandler(e)}
      />
      <hr />
      <h1>color is {colorArr?.join?.("--")}</h1>
      <ReactSelect
        isMulti
        className="w-[300px]"
        options={options}
        value={colorArr?.map?.((e) => {
          return { label: e.toUpperCase(), value: e };
        })}
        onChange={(e) => multiSelectHandler(e)}
      />
    </div>
  );
}
