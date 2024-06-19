import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "CHOCOLATE" },
  { value: "strawberry", label: "STRAWBERRY" },
  { value: "vanilla", label: "VANILLA" },
  { value: "vanilla1", label: "VANILLA1" },
  { value: "vanilla2", label: "VANILLA2" },
];

export default function SelectReact() {
  let [fruit, setFruit] = useState("vanilla");
  const getSingleSelect = (e) => {
    setFruit(e.value);
  };
  return (
    <div>
      <h1>Test : {fruit}</h1>
      <Select
        options={options}
        value={{ value: fruit, label: fruit }}
        onChange={(e) => getSingleSelect(e)}
      />
    </div>
  );
}
