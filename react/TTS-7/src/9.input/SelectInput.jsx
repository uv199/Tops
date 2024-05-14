import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export default function SelectInput() {
  let [singleSelect, setSingleSelect] = useState("chocolate");
  let [multiSelect, setMultiSelect] = useState(["chocolate", "strawberry"]);

  const getSingleData = (e) => {
    setSingleSelect(e.value);
  };

  const getMultiData = (e) => {
    let valueArr = e.map((ele) => ele.value);
    setMultiSelect(valueArr);
  };

  return (
    <div className="w-full">
      <h1>Flavour : {singleSelect}</h1>
      <Select
        value={{ value: singleSelect, label: singleSelect }}
        onChange={(e) => getSingleData(e)}
        className="w-[30%] m-auto"
        options={options}
      />
      <hr />
      <div>
        <h1>Flavour : {singleSelect}</h1>
        <Select
          isMulti
          value={multiSelect.map((obj) => {
            return { value: obj, label: obj };
          })}
          className="w-[30%] m-auto"
          onChange={(e) => getMultiData(e)}
          options={options}
        />
      </div>
    </div>
  );
}

/*

problem 1 - array obj to array
let e = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
];

["chocolate", "strawberry" ] 

solution
let data =e.map((obj)=>obj.value)


problem 1 - array obj to array

let e = ["chocolate", "strawberry" ] 

[
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
];

solution
let data =e.map((obj)=>{})

*/
