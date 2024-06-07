import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "10ml", label: "10ml" },
  { value: "25ml", label: "25ml" },
  { value: "50ml", label: "50ml" },
  { value: "100ml", label: "100ml" },
  { value: "250ml", label: "250ml" },
];

export default function SelectData() {
  let [size, setSize] = useState("100ml");
  return (
    <div>
      <h1>Size : {size}</h1>
      <Select
        value={{ value: size, label: size }}
        options={options}
        onChange={(e) => setSize(e.value)}
      />
    </div>
  );
}


<select name="" id="">
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
</select>
