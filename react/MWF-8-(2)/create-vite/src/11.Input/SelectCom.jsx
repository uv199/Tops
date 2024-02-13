import React, { useState } from "react";
import Select from "react-select";
import { Input } from "reactstrap";
const options = [
  { value: "Surat", label: "Surat" },
  { value: "Navsari", label: "Navsari" },
  { value: "vapi", label: "Vapi" },
  { value: "tapi", label: "Tapi" },
  { value: "anand", label: "Anand" },
];
export default function SelectCom() {
  let [city, setCity] = useState("surat");
  let [cityMulti, setCityMulti] = useState([]);

  const multiHandler = (cityArr) => {
    let arr = cityArr.map((e) => e.value);
    setCityMulti(arr);
  };
  return (
    <div>
      <h1>select</h1>
      <h1>My city name is {city}</h1>
      <Select
        className="w-25"
        options={options}
        value={{ value: city, label: city }}
        onChange={(e) => setCity(e.value)}
      />
      <hr />
      {cityMulti.map((e, i) => {
        return (
          <li key={i}>
            {i + 1}. {e}
          </li>
        );
      })}
      <Select
        isMulti
        className="w-25"
        options={options}
        value={[
          { value: "vapi", label: "Vapi" },
          { value: "Navsari", label: "Navsari" },
        ]}
        onChange={(e) => multiHandler(e)}
      />
      <Input type="color" />
    </div>
  );
}
